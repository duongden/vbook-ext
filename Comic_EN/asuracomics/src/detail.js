function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let coverImg = doc.select('.wp-post-image').attr("src");
        let descriptionMeta = doc.select(".wd-full p").html();
        let novelTitle = doc.select('h1.entry-title').first().text();
        let author = doc.select("div.infox > div:nth-child(5) > div:nth-child(2)").first().text();
        let info = doc.select(".flex-wrap").html();
        let rating = doc.select(".rating .num").first().html();
        let newChap = doc.select(".epcurlast").first().text();

       // doc.select(".ctr").remove();

        let genres = [];
        doc.select(".wd-full .mgen a").forEach(e => {
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
            detail: info + "New Chapter: " + newChap + '<br>' + "Rating: " + rating,
            suggests: [
                {
                    title: "Popular this week",
                    input: doc.select("#wpop-items").html(),
                    script: "suggest.js"
                }
            ],
            host: "https://asuracomics.com"
        });
    }
    return null;
}