// function execute(url) {
//     url = url.replace('m.paozww.com', 'www.paozww.com');
//     let response = fetch(url);

//     if (response.ok) {
//         let doc = response.html();
//         let htm = doc.select("article#content").html();
//         htm = htm.replace(/\&nbsp;/g, "");
//         return Response.success(htm);
//     }
//     return null;
// }

function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let htm = doc.select("article#content").html();
        return Response.success(htm);
    }
    return null;
}