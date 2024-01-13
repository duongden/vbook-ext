function execute() {
    return Response.success([
        {title: "All", input: "/novel_list?type=topview&category=all&state=all", script: "gen.js"},
        {title: "Newest", input: "/novel_list?type=newest&category=all&state=all", script: "gen.js"},
        {title: "Latest Update", input: "/novel_list?type=latest&category=all&state=all", script: "gen.js"},
        {title: "Ongoing", input: "/novel_list?type=newest&category=all&state=ongoing", script: "gen.js"},
        {title: "Completed", input: "/novel_list?type=topview&category=all&state=completed", script: "gen.js"}
    ]);
}
//https://bestlightnovel.com/novel_list?type=topview&category=all&state=all&page=1