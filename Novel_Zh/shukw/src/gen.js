load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(BASE_URL + url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select("#newscontent .l li").forEach(e => {
            let coverImg = "https://raw.githubusercontent.com/duongden/vbook/main/nocover.jpg";
            data.push({
                name: e.select(".s2 a").first().text(),
                link: BASE_URL + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                cover: coverImg,
                host: BASE_URL
            })
        });


        return Response.success(data)
    }
    return null;
}