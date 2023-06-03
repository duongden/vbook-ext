function execute(url) {
    let response = fetch(url + "/");
    if (response.ok) {
        let doc = response.html();

        let coverImg = doc.select("#thumb img").first().attr("src");
        if (coverImg.startsWith("/")) {
            coverImg = "https://wap.ebookbao.org" + coverImg;
        }
        let author = doc.select(".author a").first().text();
        return Response.success({
            name: doc.select(".title").text(),
            cover: coverImg,
            author: author,
            detail: "Tác giả: " + author,
            description: doc.select("li.sort").text() + "<br>" + doc.select("#book_detail > li:nth-child(3)").text() + "<br>" + doc.select("#book_detail > li:nth-child(4)").text().replace(/\d\d:\d\d:\d\d/g, "") + "<br>" + doc.select(".review").text(),
            host: "https://wap.ebookbao.org"
        });
    }
    return null;
}