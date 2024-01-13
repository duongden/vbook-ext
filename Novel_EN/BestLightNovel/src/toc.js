load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let chapList = [];
        let el = doc.select(".chapter-list span a");
        for (let i = 0; i < el.size(); i++) {
            let e = el.get(i);
            chapList.push({
                name: e.text(),
                url: e.attr("href"),
                host: BASE_URL
            });
        }
        let reversedChapList = chapList.reverse();
        return Response.success(reversedChapList);
    }
    return null;
}