function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url,{
        method : 'GET',
        queries: {
            page : page
        }
    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select('.pagination').first().select('li.active + li').text();
        let el = doc.select(".story-list div.media.m-b-30")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select(".media-heading a").first().text(),
                link: e.select(".media-heading a").first().attr("href"),
                cover: e.select(".story-thumb img.media-object").attr("src"),
                description: e.select("div.media-body > p:nth-child(3) > a").text(),
                host: "https://novely.info/"
            })
        }
        return Response.success(data, next)
    }
    return null;
}
