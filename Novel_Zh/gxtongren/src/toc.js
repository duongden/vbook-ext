function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select("#list-chapterAll a").forEach(e => data.push({
            name: e.text(),
            url: "https://www.gxtongren.com" + e.attr('href'),
            host: "https://www.gxtongren.com"
        }));
        return Response.success(data);
    }
    return null;
}