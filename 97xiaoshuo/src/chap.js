function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let htm = doc.select("#content p.content_detail").html();
        console.log("blacktea");
        htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '')
            .replace(/ ?\n/g, "<br>")
            .replace(/<\/?p>/g, "")
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "");
        return Response.success(htm);
    }
    return null;
}
