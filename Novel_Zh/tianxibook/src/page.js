load('config.js');
function execute(url) {
   // url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    if (url.slice(-1) !== "/")
        url = url + "/";
    url = url.replace('/book/', '/xiaoshuo/');

    let response = fetch(url);
    console.log(url)
    if (response.ok) {
        let doc = response.html();
        const data = [];
        let elr1 = doc.select("#indexselect").first().select("option");
        elr1.forEach(e => {
            data.push(BASE_URL + e.attr("value"));
        });

        return Response.success(data);
    }
    return null;
}