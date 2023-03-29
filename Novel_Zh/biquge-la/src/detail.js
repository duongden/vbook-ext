function execute(url) {
    url = url.replace('m.biquge.la', 'www.biquge.la');
    if (url.slice(-1) !== "/")
        url = url + "/";
    let response = fetch(url);
    if (response.ok) {
        console.log("blacktea");
        let doc = response.html();

        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        let novelTitle = doc.select('meta[property="og:title"]').attr("content");
        let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");
        let author = doc.select('meta[property="og:novel:author"]').attr("content");
        let novelCategory = doc.select('meta[property="og:novel:category"]').attr("content");
        let updateTime = doc.select('meta[property="og:novel:update_time"]').attr("content").replace(/\d\d:\d\d/g, "");
        let status = doc.select('meta[property="og:novel:status"]').attr("content");

        if (coverImg.startsWith("/")) {
            coverImg = "http://www.biquge.la" + coverImg;
        }
        return Response.success({
            name: novelTitle,
            cover: coverImg,
            author: author,
            description: "Thể loại: " + novelCategory + '<br>' + "Tình trạng: " + status + '<br>' + "Mới nhất: " + newChap  + '<br>' + "Thời gian cập nhật: " + updateTime + '<br>' + doc.select(".book-intro").html(),
            detail: "Tác giả: " + author,
            host: "http://www.biquge.la"
        });
    }
    return null;
}