function execute(url) {
    url = url.replace("www.fansg.cc", "m.fansg.cc");
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let chapList = [];
        doc.select(".bookshelf-list a").forEach(e => {
            chapList.push({
                name: e.text(),
                url: e.attr("href"),
                host: "http://m.fansg.cc"
            });
        });
        return Response.success(chapList);
    }
    return null;
}