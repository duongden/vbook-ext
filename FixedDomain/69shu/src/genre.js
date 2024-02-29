load('config.js');
function execute() {
//https://www.69shu.pro/newtag/%E8%BD%BB%E6%9D%BE/
    let response = fetch(BASE_URL + "/newtag/");
    if (response.ok) {
        let doc = response.html('gbk');
        let menu = doc.select(".tag ul a")
        var nav = []
        menu.forEach(e => {
            nav.push({ 
                title: e.text(), 
                input: e.attr('href'), 
                script: "gen2.js" 
                })
        })
        return Response.success(nav)
    }

    return null;
}