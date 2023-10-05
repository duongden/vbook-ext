load('config.js');
function execute(key) {
    let response = fetch(BASE_URL + '/search.html?name=' + key);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select(".novelslist2 li").forEach(e => {
            if (e.select("a").first().text() !== null && e.select("a").first().text() !== '') {
                data.push({
                    name: e.select("a").first().text(),
                    link: BASE_URL + e.select("a").first().attr("href"),
                    description: e.select(".s3 a").first().text(),
                    host: BASE_URL
                })
            }
        });

        return Response.success(data);
    }
    return null;
}
