function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let coverImg = doc.select(".item img").first().attr("src");
        if (coverImg.startsWith("/")) {
            coverImg = "https://www.zrfsxs.com" + coverImg;
        }

        let author =  doc.select("div > p:nth-child(3)").text().replace(/作\s*者：/g, "")
        let status = doc.select("div > p:nth-child(4)").text()
        let novelType = doc.select("div > p:nth-child(2) > span:nth-child(2)").text()
        let charCount = doc.select(".itemtxt i").text()
       // let ongoing = doc.select("div > p:nth-child(4)").text()

        return Response.success({
            name: doc.select("h1 a").text(),
            cover: coverImg,
            author: author,
            detail: "作者: " + author,
            description: novelType + "<br>" + status + "<br>" + charCount + "<br>" + doc.select("div.des.bb").html(),
            host: "https://www.zrfsxs.com"
        });
    }
    return null;
}