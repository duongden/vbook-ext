function execute(url) {
    url = url.replace('m.ddyueshu.com', 'www.ddyueshu.com');
    let response = fetch("https://www.ddyueshu.com" + url);
    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];
        doc.select(".l li").forEach(e => {
            console.log(doc.select("li"))
            data.push({
                name: e.select(".s2 a").first().text(),
                cover: "https://raw.githubusercontent.com/duongden/vbook/main/nocover.png",
                link: "https://www.ddyueshu.com" + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.ddyueshu.com"
            })
        });
        return Response.success(data)
    }
    return null;
}