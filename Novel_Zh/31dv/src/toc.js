function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
       console.log(url)
        let el = doc.select("#list > dl > a[rel='chapter']")
        const data = [];
        for (let i = 12; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: "https://www.31dv.com"
            })
        }
        return Response.success(data);
    }
    return null;
}
// function execute(url) {
//     let response = fetch(url + "/");
//     if (response.ok) {
//         let doc = response.html();
//         let el1 = doc.select("#list > dl").last()
//         doc.select("#list > dl > dt:nth-child(14)").remove()
//         doc.select("#list > dl > dt > a").remove()
//         //#list > dl > dt:nth-child(27) > a
//         let el = el1.select("a")
//         const data = [];
//         let count = 0;
//         if (el.size() > 12)
//             count = 12;

//         for (let i = count; i < el.size(); i++) {
//             var e = el.get(i);
//             data.push({
//                 name: e.select("a").text(),
//                 url: "https://www.31dv.com" + e.attr("href"),
//                 host: "https://www.31dv.com"
//             })
//         }
//         return Response.success(data);
//     }
//     return null;
// }