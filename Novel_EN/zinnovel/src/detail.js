function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select(".rate-title").remove();
        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        let descriptionMeta = doc.select(".summary__content").first().html();
        let novelTitle = doc.select('meta[property="og:title"]').attr("content");
        let author = doc.select(".author-content a").first().text();
        let rating = doc.select(".vote-details").first().html();

        let genres = [];
        doc.select(".genres-content a").forEach(e => {
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
            suggests: [
                {
                    title: "Popular this month",
                    input: doc.select("#manga-recent-8").html(),
                    script: "suggest.js"
                }
            ],
            host: "https://zinnovel.com"
        });
    }
    return null;
}