function execute(url) {
    //url = url.replace('m.xlaidudu.net', 'www.xlaidudu.net');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select("#list li a")
        const data = [];
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: "https://www.xsyz.cc" + e.attr("href"),
                host: "https://www.xsyz.cc"
            })
        }
        return Response.success(data);
    }
    return null;
}