function execute(url,page) {
    url = url.replace('m.idejian.com', 'www.idejian.com');
    if (!page) page = 1;
    if (url.indexOf("&page=") === -1) {
        url = url + "&order=2" + "&page=" + page;
    }
    let response = fetch("https://www.idejian.com" + url);
    console.log("https://www.idejian.com" + url)
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select(".v_books li").forEach(e => {
            data.push({
                name: e.select(".bkitem_name a").first().text(),
                link: "https://www.idejian.com" + e.select(".bkitem_name a").first().attr("href"),
                description: e.select(".bkitem_author").first().text(),
                host: "https://www.idejian.com"
            })
        });
        var next = (parseInt(page)+1).toString();
        return Response.success(data, next)
    }
    return null;
}