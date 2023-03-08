function execute(url) {
    if(url.slice(-1) !== "/")
        url = url + "/";
    url = url.replace('m.chuandaipc.com', 'www.chuandaipc.com');
    let response = fetch(url);
    if (response.ok) {

        let doc = response.html();
        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        let descriptionMeta = doc.select('meta[property="og:description"]').attr("content");
        let title = doc.select('meta[property="og:title"]').attr("content");
        let status = doc.select('meta[property="og:novel:status"]').attr("content");
        let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");   
        let author = doc.select('meta[property="og:novel:author"]').attr("content");
        let category = doc.select('meta[property="og:novel:category"]').attr("content");

        if (coverImg.startsWith("/")) {
            coverImg = "https://www.chuandaipc.com" + coverImg;
        }
             
        return Response.success({
            name: title,
            cover: coverImg,
            author: author,
            description: ("<br>Thể loại:<br>") + category + ("<br>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>") + descriptionMeta,
            detail: "作者：" +  author + ("<br>⠀⠀⠀⠀⠀⠀⠀⠀<br>") +"最新章节" + newChap,
            host: "https://www.chuandaipc.com"
        });
    }
    return null;
}