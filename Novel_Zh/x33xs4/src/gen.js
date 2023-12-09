function execute(url) {
    url = url.replace('m.x33xs4.com', 'www.x33xs4.com');
    let response = fetch("https://www.x33xs4.com" + url);
    if (response.ok) {
        let doc = response.html();
        let coverImg = "https://raw.githubusercontent.com/duongden/vbook/main/nocover.png";
        const data = [];
        doc.select(".l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: "https://www.x33xs4.com" + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                cover: coverImg,
                host: "https://www.x33xs4.com"
            })
        });
        return Response.success(data)
    }
    return null;
}