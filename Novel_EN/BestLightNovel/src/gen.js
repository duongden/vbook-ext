load('config.js');
function execute(url, page) {
    if (!page) page = 1;
    let response = fetch(BASE_URL + url + "&page=" + page);
    console.log(BASE_URL + url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select(".danh_sach div.list_category").forEach(e => {
            data.push({
                name: e.select("h3 a").first().text(),
                link: e.select("h3 a").first().attr("href"),
                cover: e.select("div a img").first().attr("src"),
                description: e.select("span").first().text().replace(/\d\d:\d\d/g, ""),
                host: BASE_URL
            });
        });
        // Check if the "page" class contains "LAST(1)"
        let isLastPage = doc.select('.phan-trang').first().select('a.page:contains(LAST(1))').length > 0;
        // Set next accordingly
        let next = isLastPage ? null : doc.select('.phan-trang').first().select('a.pageselect + a').attr("href");
        if (data.length > 0) {
            return Response.success(data, next ? next.toString() : null);
        }
    }
    return null;
}