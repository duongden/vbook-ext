function execute(url) {
    url = url.replace('m.b520.cc', 'www.b520.cc');
    let response = fetch(url);
    if (response.ok) {
        console.log("blacktea");
        let doc = response.html();
        let coverImg = doc.select("#fmimg img").first().attr("src");
        if (coverImg.startsWith("/")) {
            coverImg = "http://www.b520.cc" + coverImg;
        }
        return Response.success({
            name: doc.select("#info h1").text(),
            cover: coverImg,
            author: doc.select("#info p").first().text().replace(/作\s*者：/g, ""),
            description: doc.select("#intro").text(),
            detail: doc.select("#info p").last().html(),
            host: "http://www.b520.cc"
        });
    }
    return null;
}