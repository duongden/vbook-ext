function execute(url) {
    var doc = Http.get(url).html();
    if (doc) {

        let author =  doc.select('meta[property="book:author"]').attr("content");
        let coverImg =  doc.select(".story-thumb img").attr("src");
       // let category = doc.select('meta[name="keywords"]').attr("content").replace(/,/g, ", ");
        let title = doc.select('meta[property="og:title"]').attr("content");

        return Response.success({
            name: title,
            cover: coverImg,
            host: "https://anhtinh.com",
            author: author,
            description: doc.select(".uk-description-list-horizontal").html().replace(/<dt>/g,'<br>'),
            detail: "Tác giả: " + author,
        });
    }
    return null;
}
