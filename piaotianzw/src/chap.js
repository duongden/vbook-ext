function execute(url) {
    url = url.replace('m.piaotian.la', 'www.piaotian.la');
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let htm = doc.select("#content").html();
        htm = htm.replace(/\&nbsp;/g, "");
        return Response.success(htm);
    }
    return null;
}