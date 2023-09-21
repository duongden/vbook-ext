function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        doc.select(".code-block img").remove();
        doc.select("a[rel='noopener noreferrer']").remove();
        doc.select(".ad").remove();
        let imgs = [];
        doc.select("#readerarea img").forEach(e => {
            imgs.push(e.attr("src"));
        })
        return Response.success(imgs);
    }
}