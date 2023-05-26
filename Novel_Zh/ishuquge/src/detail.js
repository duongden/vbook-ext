function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select('meta[property="og:title"]').attr("content"),
        cover: doc.select('meta[property="og:image"]').attr("content"),
        author: doc.select('meta[property="og:novel:author"]').attr("content"),
        description: "Thể loại: " + doc.select('meta[property="og:novel:category"]').attr("content") + '<br>' + "Tình trạng: " + doc.select('meta[property="og:novel:status"]').attr("content") + '<br>' + "Mới nhất: " + doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content")  + '<br>' + "Thời gian cập nhật: " + doc.select('meta[property="og:novel:update_time"]').attr("content").replace(/\d\d:\d\d:\d\d/g, "") + '<br>' + doc.select(".intro").text(),
        detail: "Tác giả: " + doc.select('meta[property="og:novel:author"]').attr("content"),
      //  description: doc.select(".intro").html(),
        host: "https://www.ishuquge.la"
    });
}