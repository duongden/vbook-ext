function execute(url, page) {
    if(!page) page = '1';
    if(url.slice(-1) !== "/")
        url = url + "/";
	url = url.replace('m.2kshu.cc', 'www.2kshu.cc');
    let response = fetch(url+page+".html");
    if (response.ok) {
        let doc = response.html();
        const data = [];
        let next =  doc.select("li[title*=下一页] a").first().attr("href").split(/[/ ]+/).pop().replace(".html","")
		doc.select("#newscontent .l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "http://www.2kshu.cc"
            })
        });


        
        return Response.success(data,next)
    }
    return null;
}