function execute(url, page) {
    if(!page) page = '1';
    if(url.slice(-1) !== "/")
        url = url + "/";
	url = url.replace('m.dongliuxiaoshuo.com', 'www.dongliuxiaoshuo.com');
    let response = fetch(url+page+".html");
    if (response.ok) {
        let doc = response.html();
        const data = [];
        let next =  doc.select("a[title*=下一页]").first().attr("href").split(/[/ ]+/).pop().replace(".html","")
		doc.select("tbody tr").forEach(e => {
            if(e.select("a").first().text() !== null && e.select("a").first().text() !== '') {
                data.push({
                    name: e.select("td a").first().text(),
                    cover: "https://raw.githubusercontent.com/duongden/vbook/main/nocover.png",
                    link: e.select("td a").first().attr("href"),
                    description: e.select("td a").get(1).text(),
                    host: "https://www.dongliuxiaoshuo.com"
                })
            }
        });


        
        return Response.success(data,next)
    }
    return null;
}