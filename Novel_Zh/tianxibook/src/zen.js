load('config.js');
function execute(url, page) {
   // url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
   if(!page) page = '1';

    let response = fetch(BASE_URL + url + page + "/");
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select("#hotcontent .item").forEach(e => {
            let coverImg = e.select("img.lazy").attr("data-original");
            data.push({
                name: e.select("dt a").first().text().replace("《","").replace("》",""),
                link: BASE_URL + e.select("dt a").attr("href"),
                cover: coverImg,
                description: e.select(".btm a").text(),
                host: BASE_URL
            })
        });
        let next = parseInt(page) + 1;
        return Response.success(data, next)
    }
    return null;
}