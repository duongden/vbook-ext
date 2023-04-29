load('config.js');
function execute(url, page) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
	// url = url.replace('m.dongliuxiaoshuo.com', 'www.dongliuxiaoshuo.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select("tbody tr").forEach(e => {
            if(e.select("a").first().text() !== null && e.select("a").first().text() !== '') {
                data.push({
                    name: e.select("td a").first().text(),
                    cover: "https://raw.githubusercontent.com/duongden/vbook/main/nocover.png",
                    link: e.select("td a").first().attr("href"),
                    description: e.select("td a").get(1).text(),
                    host: BASE_URL
                })
            }
        });



        return Response.success(data)
    }
    return null;
}