function execute(url) {

    let response = fetch("https://www.bqgbi.com" + url);
    if (response.ok) {
        let doc = response.html();
        let coverImg = "https://raw.githubusercontent.com/duongden/vbook/main/nocover.png";
        const data = [];

		doc.select(".l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: "https://www.bqgbi.com" + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                cover: coverImg,
                host: "https://www.bqgbi.com"
            })
        });


        return Response.success(data)
    }
    return null;
}