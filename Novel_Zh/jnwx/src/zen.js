function execute(url, page) {
    if (!page) page = '1';
    if (url.slice(-1) !== "/")
        url = url + "/";
    url = url.replace('m.jnwx.org', 'www.jnwx.org');
    let response = fetch(url + page);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        
        doc.select("#newscontent .l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: "https://www.jnwx.org" + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.jnwx.org"
            })
        });
        let next = doc.select("a:contains(>)").first().attr("href").slice(0, -1).split(/[/ ]+/).pop()
        return Response.success(data, next)
    }
    return null;
}