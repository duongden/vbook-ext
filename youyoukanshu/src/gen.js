function execute(url, page) {
    if(!page) page = '0';
    if(url.slice(-1) !== "/")
        url = url + "/";
	url = url.replace('m.youyoukanshu.com', 'www.youyoukanshu.com');
    let response = fetch(url +  page + ".html");
    if (response.ok) {
        let doc = response.html();
        const data = [];
        let next = ""
        next = doc.select("a:contains(>)").attr("href").replace(".html","").split(/[/ ]+/).pop();
		doc.select("div.row .media").forEach(e => {
            data.push({
                name: e.select(".media-body h4.media-heading").first().text(),
                link: e.select(".media-body h4.media-heading a").first().attr("href"),
                cover: e.select("img").first().attr("data-original"),
                description: e.select("h5.text-muted").first().text(),
                host: "https://www.youyoukanshu.com"
            })
        });


        return Response.success(data, next);
    }
    return null;
}





// function execute(url, page) {
// 	url = url.replace('m.youyoukanshu.com', 'www.youyoukanshu.com');
//     let response = fetch(url);
//     if (response.ok) {
//         let doc = response.html();
//         const data = [];


// 		doc.select("div.row .media").forEach(e => {
//             data.push({
//                 name: e.select(".media-body h4.media-heading").first().text(),
//                 link: e.select(".media-body h4.media-heading a").first().attr("href"),
//                 cover: e.select("img").first().attr("data-original"),
//                 description: e.select("h5.text-muted").first().text(),
//                 host: "https://www.youyoukanshu.com"
//             })
//         });


//         return Response.success(data)
//     }
//     return null;
// }