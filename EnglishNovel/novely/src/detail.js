function execute(url) {
    var doc = Http.get(url).html();
    if (doc) {

        let author =  doc.select('meta[property="book:author"]').attr("content");
        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        let category = doc.select('meta[name="keywords"]').attr("content").replace(/,/g, ", ");

        return Response.success({
            name: doc.select("div.media-body h1").text(),
            cover: coverImg,
            host: "https://novely.us/",
            author: author,
            description: "Tag: " + category + '<br>' + "Status: " + doc.select("div.story-stage.mb-3 > p").text().replace("(","").replace(")","") + '<br>' + doc.select("div.media-body > p:nth-child(5)").text() + '<br>' + doc.select("div.media-body > p:nth-child(7)").text() + '<br>' + doc.select(".para").text(), 
            detail: "Author: " + author,
        });
    }
    return null;
}
