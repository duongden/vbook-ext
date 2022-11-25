// function execute(url) {
//     let response = fetch(url + "/");
//     if (response.ok) {
//         let doc = response.html();
//         const list = [];
//        var el =  doc.select("#list a");
//        for (var i = 9; i < el.size(); i++) {
//                 var e = el.get(i)
//                 list.push({
//             name: e.select("a").text(),
//             url: e.attr("href"),
//             host: "https://wujixsw.com"
        

//         });
//             }
//             return Response.success(list);
//     }
//     return null;
// }

function execute(url) {
	// url = url.replace('m.paozww.com', 'www.paozww.com');
    let response = fetch(url + "/");
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select("#list").last()
        let el = el1.select("a")
        const data = [];
        let count = 0;
        if(el.size()>12)
            count = 12;

        for (let i = count;i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: "https://wujixsw.com" + e.attr("href"),
                host: "https://wujixsw.com"
            })
        }
        return Response.success(data);
    }
    return null;
}