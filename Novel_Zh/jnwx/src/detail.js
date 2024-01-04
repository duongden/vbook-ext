function execute(url) {
  //  url = url.replace('m.jnwx.org', 'www.jnwx.org');
    let response = fetch(url);
    if (response.ok) {

        let doc = response.html();
        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        let descriptionMeta = doc.select('meta[property="og:description"]').attr("content");
        let title = doc.select('meta[property="og:title"]').attr("content");
        let status = doc.select('meta[property="og:novel:status"]').attr("content");
        let author = doc.select('meta[property="og:novel:author"]').attr("content");
        let category = doc.select('meta[property="og:novel:sort"]').attr("content");
        let updateTime = doc.select('meta[property="og:novel:update_time"]').attr("content").replace(/\d\d:\d\d:\d\d/g, "");
        let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");

        return Response.success({
            name: title,
            cover: coverImg,
            author: author,
            description: "Thể loại: " + category + '<br>' + "Tình trạng: " + status + '<br>' + "Mới nhất: " + newChap + '<br>' + "Thời gian cập nhật: " + updateTime + '<br>' + descriptionMeta,
            detail: "Tác giả：" + author,
            host: "https://www.jnwx.org"
        });
    }
    return null;
}