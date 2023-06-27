function execute(url) {
    let response = fetch(url + '/');
    if (response.ok) {
        let doc = response.html('gbk');

        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        let descriptionMeta = doc.select('meta[property="og:description"]').attr("content");
         let novelTitle = doc.select('meta[property="og:novel:book_name"]').attr("content");
         let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content").replace(/章节目录 (\d+)\./g,'');
         let author = doc.select('meta[property="og:novel:author"]').attr("content");
         let novelCategory = doc.select('meta[property="og:novel:category"]').attr("content");
         let status = doc.select('meta[property="og:novel:status"]').attr("content");
         let updateTime = doc.select('meta[property="og:novel:update_time"]').attr("content").replace(/\d\d:\d\d:\d\d/g, "");


        return Response.success({
            name: novelTitle,
            cover: coverImg,
            author: author,
            description: ("Thể loại: ") + novelCategory + '<br>' + "Tình trạng: " + status + '<br>' + "Mới nhất: " + newChap  + '<br>' + "Thời gian cập nhật: " + updateTime + '<br>' + descriptionMeta,
            detail: "Tác giả：" + author,
            host: "http://www.xmsw.cc"
        });
    }
    return null;
}