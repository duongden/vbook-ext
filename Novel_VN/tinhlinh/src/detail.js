function execute(url) {
    var doc = Http.get(url).html();
    if (doc) {

        let author =  doc.select('meta[property="book:author"]').attr("content");
        let coverImg =  doc.select(".story-thumb img").attr("src");
        let category = doc.select('meta[name="keywords"]').attr("content").replace(/,/g, ", ");

        return Response.success({
            name: doc.select("div.media-body h1").text(),
            cover: coverImg,
            host: "https://tinhlinh.com",
            author: author,
            description: "Từ khóa: " + category + '<br>' + "Tình trạng: " + doc.select("div.story-stage > p").text().replace("(","").replace(")","") + '<br>' + doc.select("div.media-body > p:nth-child(5)").text() + '<br>' + doc.select("div.media-body > p:nth-child(7)").text() + '<br>' + doc.select(".para").html(),
            detail: "Tác giả: " + author,
        });
    }
    return null;
}
