load('config.js');
function execute(key) {
    let response = fetch(BASE_URL + '/search/?searchkey=' + key);

    if (response.ok) {
        let doc = response.html();
        const data = [];
      //  doc.select("#hotcontent > table > tbody > tr:nth-child(1)").remove()
		doc.select(".content").forEach(e => {
            data.push({
                name: e.select("dt a").first().text(),
                cover: e.select(".cover img").first().attr("src"),
                link: BASE_URL + e.select("dt a").first().attr("href"),
                description: e.select("dd a").first().text(),
                host: BASE_URL
            })
        });
        return Response.success(data);
    }
    return null;
}