load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select(".rate-title").remove();
        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        let descriptionMeta = doc.select(".summary__content").first().html();
        let novelTitle = doc.select('meta[property="og:title"]').attr("content");
        let author = doc.select(".author-content").first().text();
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
            detail: "Rating: " + rating,
            suggests: [
                {
                    title: "Trending this month",
                    input: doc.select("#manga-recent-6").html(),
                    script: "suggest.js"
                }
            ],
            host: BASE_URL
        });
    }
    return null;
}