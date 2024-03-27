load('config.js');
function execute(key) {
    if (!page) page = '1';
    //https://novelhulk.com/ajax/search-novel?keyword=
    let response = fetch(BASE_URL + "/ajax/search-novel?keyword=" + key.replace(/ /g, "+"));
    if (response.ok) {
        let doc = response.html();
        let novelList = [];
    //    let next = doc.select(".pagination > li.active + li").last().text();
        doc.select("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive .list-novel .row").forEach(e => {
            novelList.push({
                name: e.select(".novel-title a").text(),
                link: e.select(".novel-title a").first().attr("href"),
                description: e.select(".author").text(),
                cover: e.select(".cover").attr("src"),
                host: BASE_URL,
            });
        });
        return Response.success(novelList);
    }
    return null;
}

