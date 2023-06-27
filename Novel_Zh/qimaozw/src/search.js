load('config.js');
   function execute(key, page) {
        let response = fetch(BASE_URL + '/search.php', {
            method: "POST",
            queries: {
                keyWord : key,
            }
        });
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select("tbody tr").forEach(e => {
            let author = e.select("td.col-md-2.col-sm-4.col-xs-4").first().text();
            data.push({
                //td.col-md-2.col-sm-6.col-xs-8 > a
                name: e.select("td a").first().text(),
                link: BASE_URL + e.select("td.col-md-2.col-sm-6.col-xs-8 > a").first().attr("href"),
                description: author,
                host: BASE_URL
            })
        });

        return Response.success(data);
    }
    return null;
}