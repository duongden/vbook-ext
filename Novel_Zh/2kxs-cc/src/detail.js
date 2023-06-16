function execute(url) {
    const doc = Http.get(url).html();

    let coverImg = doc.select('meta[property="og:image"]').attr("content");
   // let descriptionMeta = doc.select('meta[property="og:description"]').attr("content");
    let novelTitle = doc.select('meta[property="og:title"]').attr("content");
    let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");
    let author = doc.select('meta[property="og:novel:author"]').attr("content");
    let novelCategory = doc.select('meta[property="og:novel:category"]').attr("content");
    let status = doc.select('meta[property="og:novel:status"]').attr("content");
    let updateTime = doc.select('meta[property="og:novel:update_time"]').attr("content").replace(/\d\d:\d\d:\d\d/g, ""); 

    return Response.success({
        name: novelTitle,
        cover: coverImg,
        author: author,
        description: ("Thể loại: ") + novelCategory + '<br>' + "Tình trạng: " + status + '<br>' + "Mới nhất: " + newChap  + '<br>' + "Thời gian cập nhật: " + updateTime + '<br>' + doc.select(".bookinfo_intro").html(),
        detail: "Tác giả：" + author,
        host: "https://www.2kxs.cc"
    });
}