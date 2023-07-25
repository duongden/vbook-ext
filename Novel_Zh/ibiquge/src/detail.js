function execute(url) {
    url = url.replace('m.ibiquzw.com', 'www.ibiquzw.com');
    let response = fetch(url);
    if (response.ok) {

        let doc = response.html();
        let coverImg = doc.select("#fmimg img").first().attr("src");
        if (coverImg.startsWith("/")) {
            coverImg = "https://www.ibiquzw.com" + coverImg;
        }
        let author =  doc.select("#info p").first().text().replace(/作\s*者：/g, "");
        let category = doc.select('meta[property="og:novel:category"]').attr("content");
        let updateTime = doc.select('meta[property="og:novel:update_time"]').attr("content").replace(/\d\d:\d\d:\d\d/g, "");
        let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");
        let descriptionMeta = doc.select('meta[property="og:description"]').attr("content");

        return Response.success({
            name: doc.select("#info h1").text(),
            cover: coverImg,
            author: author,
            description: ("Thể loại: ") + category + '<br>' + "Mới nhất: " + newChap  + '<br>' + "Thời gian cập nhật: " + updateTime + '<br>' + descriptionMeta,
            detail: "Tác giả: " + author,
            host: "https://www.ibiquzw.com"
        });
    }
    return null;
}
