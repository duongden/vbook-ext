function execute(key) {
    let response = fetch("https://www.frgls.com/user/search.html?q=" + key);
    console.log("https://www.frgls.com/user/search.html?q=" + key)
    if (response.ok) {
        let json = response.json();
        const data = [];
        json.forEach(e => {
            data.push({
                name: e.articlename,
                link: "https://www.frgls.com" + e.url_list,
                cover: e.url_img,
                description: e.author,
                host: "https://www.frgls.com"
            })
        });
        return Response.success(data);
    }
    return null;
}