function execute(url) {
    if (url.slice(-1) !== "/")
        url = url + "/";
    url = url.replace('m.9biquge.com', 'www.9biquge.com');
    let response = fetch(url);
    if (response.ok) {

        let doc = response.html();
        let coverImg = doc.select("#fmimg img").first().attr("src");
        if (coverImg.startsWith("/")) {
            coverImg = "http://www.9biquge.com" + coverImg;
        }
        let author = doc.select("#info p").first().text().replace(/作\s*者：/g, "")
        return Response.success({
            name: doc.select("#info h1").text(),
            cover: coverImg,
            author: author,
            description: doc.select("#intro").first().text().replace(/�/g, ""),
            detail: doc.select("#info p").text(),
            host: "http://www.9biquge.com"
        });
    }
    return null;
}