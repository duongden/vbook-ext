load('config.js');

function execute(url) {
    // Extract folder ID and book ID from the URL
    const regex = /\/(\d+)\/(\d+)\/?$/;
    const match = url.match(regex);
    if (!match) return null;
    const folderId = match[1];
    const bookId = match[2];

    // Construct the URL for fetching the chapter list
    const dataUrl = `${BASE_URL}/${folderId}/${bookId}/`;

    // Fetch the chapter list page
    let response = fetch(dataUrl);
    if (response.ok) {
        let doc = response.html('gbk');
        let el1 = doc.select(".index_listbox .list1chapter").last()
        let el = el1.select("li a")
        const data = [];
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            // Construct the URL for each chapter
            const chapterId = e.attr("href").replace('.html', '');
            const chapterUrl = `${BASE_URL}/${folderId}/${bookId}/${chapterId}.html`;
            data.push({
                name: e.text(),
                url: chapterUrl,
                host: BASE_URL
            });
        }
        return Response.success(data);
    }
    return null;
}
