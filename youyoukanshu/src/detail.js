function execute(url) {
    url = url.replace('m.youyoukanshu.com', 'www.youyoukanshu.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let author =  doc.select('meta[property="og:novel:author"]').attr("content");

        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        let descriptionMeta = doc.select('meta[property="og:description"]').attr("content");
        let title = doc.select('meta[property="og:novel:book_name"]').attr("content");
        let status = doc.select('meta[property="og:novel:status"]').attr("content");
        let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");
        let category = doc.select('meta[property="og:novel:category"]').attr("content");




        return Response.success({
            name: title,
            cover: coverImg,
            author: author,
            description: ("<br>Thể loại:<br>") + category + ("<br>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>") + "Trạng thái:" + status + ("<br>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>") + descriptionMeta,
            detail: "作者：" + author + ("<br>⠀⠀⠀⠀<br>") + "Mới nhất: "+ newChap,
            host: "https://www.youyoukanshu.com"
        });
    }
    return null;
}