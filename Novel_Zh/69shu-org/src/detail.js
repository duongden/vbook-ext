function execute(url) {
    const doc = Http.get(url).html();

    let coverImg = doc.select('meta[property="og:image"]').attr("content");
    //let descriptionMeta = doc.select('meta[property="og:description"]').attr("content");
    let novelTitle = doc.select('meta[property="og:title"]').attr("content");
    let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");
    let author = doc.select('meta[property="og:novel:author"]').attr("content");
    let novelCategory = doc.select('meta[property="og:novel:category"]').attr("content");
    let updateTime = doc.select('meta[property="og:novel:update_time"]').attr("content").replace(/\d\d:\d\d:\d\d/g, "");
    let status = doc.select('meta[property="og:novel:status"]').attr("content");

    return Response.success({
        name: novelTitle,
        cover: coverImg,
        author: "Tác giả: " + author,
        description: doc.select(".bookinfo_intro").html(),
        detail: ("Thể loại: ") + novelCategory + '<br>' + "Tình trạng: " + status + '<br>' + "Mới nhất: " + newChap  + '<br>' + "Thời gian cập nhật: " + updateTime,
        host: "https://www.69shu.org"
    });
}