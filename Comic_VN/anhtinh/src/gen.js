function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url + "?page=" + page);
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".uk-pagination li.uk-active + li").last().select("a").text();
        let el = doc.select("div.uk-width-medium-4-6 > div.uk-grid.uk-grid-small.latest-posted > div")
        let data = [];
        el.forEach(e => data.push({
                name: e.select("h3.posted-title").text(),
                cover:e.select(".posted-thumb img").attr("src"),
                link: e.select(".single-posted a").first().attr("href"),
                description: e.select(".posted-meta").first().text(),
                host: "https://anhtinh.com"
        }))
        return Response.success(data, next)
    }
    return null;
}


// function execute(url) {
//     let response = fetch(url);
//     if (response.ok) {
//         let doc = response.html();
//         const data = [];
// 		doc.select("div.uk-width-medium-4-6 > div.uk-grid.uk-grid-small.latest-posted > div").forEach(e => {
//             data.push({
//                 name: e.select("h3.posted-title").text(),
//                 cover:e.select(".posted-thumb img").attr("src"),
//                 link: e.select(".single-posted a").first().attr("href"),
//                 description: e.select(".posted-meta").first().text(),
//                 host: "https://anhtinh.com"
//             })
//         });
//         return Response.success(data)
//     }
//     return null;
// }