load('config.js');
function execute(url,page) {
    if(!page) page = '1';
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(BASE_URL + url + page + ".html");
    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];
        doc.select(".toplist_list .list_ul li").forEach(e => {
            data.push({
                name: e.select(".p1 a").first().text(),
                link: e.select(".p1 a").first().attr("href"),
                description: e.select(".p3").text(),
                host: BASE_URL
            })
        });
        let next = doc.select("a:contains(下一页)").attr("href").split(/[_ ]+/).pop().replace(".html","").replace(".htm","")
        console.log(next)

        return Response.success(data, next)
    }
    return null;
}