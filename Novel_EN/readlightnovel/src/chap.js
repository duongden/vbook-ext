function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select("h3").remove();
        doc.select("center").remove();
        doc.select("script").remove();
        let htm = doc.select("#growfoodsmart").html();

        htm = cleanHtml(htm);
        return Response.success(htm);
    }
    return null;
}

//clear rác
function cleanHtml(htm) {
    htm = htm.replace(/--&gt;&gt;/g, '');
    htm = htm.replace(/\n/g,'');
    htm = htm.replace(/(<br>\s*){2,}/g, '<br>');
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '');
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    htm = htm.replace(/<!--(<br \/>)?[^>]*-->/gm, '');
    htm = htm.replace(/\&nbsp;/g, "");
    return htm;
}