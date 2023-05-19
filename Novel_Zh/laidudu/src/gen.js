function execute(url) {
	url = url.replace('m.xlaidudu.net', 'www.xlaidudu.net');
    let response = fetch("https://www.xlaidudu.net" + url);
    console.log("https://www.xlaidudu.net" + url)
    if (response.ok) {
        let doc = response.html();
        const data = [];

		doc.select(".l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.xlaidudu.net"
            })
        });


        return Response.success(data)
    }
    return null;
}