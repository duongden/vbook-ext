load('libs.js');
function execute(url, page) {
    let host = 'https://www.gxtongren.com';
    if(!page) page = '1';
    if (url.slice(-1) !== "/")
        url = url + "/";
    let response = fetch('https://www.gxtongren.com' + url + page + '/');
    console.log('https://www.gxtongren.com' + url + page + '/')
    if (response.ok) {
        let doc = response.html();
      //  let next = doc.select(".pages").select("li.active + li").text();
        const data = [];
        doc.select(".content .bookbox").forEach(box => {
            let link = box.select("h4 a").first().attr('href');
            let m, id, cover;
            if ((m = link.match(/(\d+)/)) && m[0] && (id = m[0])) {
                cover = String.format('{0}/files/article/image/{1}/{2}/{3}s.jpg', host, Math.floor(id / 1000), id, id);
            }
            data.push({
                name: box.select("h4 a").first().text(),
                link: "https://www.gxtongren.com" + link,
                cover: "https://raw.githubusercontent.com/duongden/vbook/main/nocover.png",
                description: box.select(".author").first().text().replace('作者：',''),
                host: 'https://www.gxtongren.com',
            })
        });
        var next = (parseInt(page)+1).toString();
        return Response.success(data, next)
    }
    return null;
}