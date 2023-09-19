function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select(".rate-title").remove();
        let coverImg = doc.select(".novel-cover img").attr("src");
        let descriptionMeta = doc.select(".novel-detail-body p").first().html();
        let novelTitle = doc.select("h1").first().text();
        let author = doc.select("div.novel-left > div.novel-details > div:nth-child(5) > div.novel-detail-body").first().text();
        let rating = doc.select("div.novel-right > div > div:nth-child(4) > div.novel-detail-body").first().text();
        let genres = [];
        doc.select("div.novel-left > div.novel-details > div:nth-child(2) > div.novel-detail-body > ul > li > a").forEach(e => {
            genres.push({
                title: e.text()
            });
        });
        return Response.success({
            name: novelTitle,
            author: author,
            cover: coverImg,
            description: descriptionMeta,
            genres: genres,
            detail: "Tác giả: " + author + '<br>' + "Rating: " + rating,
            host: "https://www.readlightnovel.me"
        });
    }
    return null;
}