function execute(url) {
    url = url.replace('m.idejian.com', 'www.idejian.com');
    let response = fetch(url);
    if (response.ok) {
        let json = response.json();
        let html = json.html;
        html = Html.parse(html);
        let el = html.select("li a");
        let data = []
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.text(),
                url: "https://www.idejian.com" + e.attr("href"),
                host: "https://www.idejian.com"
            });

        }
        return Response.success(data);
    }
    return null;
}