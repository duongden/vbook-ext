function execute(url) {
    url = url.replace('m.ibiquge.la', 'www.ibiquge.la');
    let response = fetch(url);
    if (response.ok) {
        console.log("blacktea");
        let doc = response.html();
        let coverImg = doc.select("#fmimg img").first().attr("src");
        if (coverImg.startsWith("/")) {
            coverImg = "http://www.ibiquge.la" + coverImg;
        }
        return Response.success({
            name: doc.select("#info h1").text(),
            cover: coverImg,
            author: doc.select("#info p").first().text().replace(/作\s*者：/g, ""),
            description: doc.select("#intro p").text(),
            detail: doc.select("#info p").html(),
            host: "http://www.ibiquge.la"
        });
    }
    return null;
}