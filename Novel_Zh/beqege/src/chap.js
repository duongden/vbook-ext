load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let htm = doc.select("#content p").html();
        htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '')
            .replace(/ ?\n/g, "<br>")
            .replace(/<\/?p>/g, "");
        return Response.success(htm);
    }
    return null;
}
