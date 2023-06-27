load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(BASE_URL + url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        //body > article > div > div.col-xs-12.col-sm-12.col-md-9.col-lg-9 > div > table > tbody
		doc.select("div.col-xs-12.col-sm-12.col-md-9.col-lg-9 > div > table > tbody > tr").forEach(e => {
            if(e.select("a").first().text() !== null && e.select("a").first().text() !== '') {
                data.push({
                    name: e.select("td a").first().text(),
                    cover: "https://raw.githubusercontent.com/duongden/vbook/main/nocover.png",
                    link: BASE_URL + e.select("td a").first().attr("href"),
                    description: e.select("td a").get(1).text(),
                    host: BASE_URL
                })
            }
        });



        return Response.success(data)
    }
    return null;
}