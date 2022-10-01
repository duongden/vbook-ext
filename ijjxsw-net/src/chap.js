function execute(url) {
    url = url.replace('m.ijjxsw.net', 'www.ijjxsw.net');
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let htm = doc.select("#view_content_txt").html();
        htm = htm.replace(/\&nbsp;/g, "");
        return Response.success(htm);
    }
    return null;
}