function execute() {
    return Response.success([
        { title: "总点击榜", input: "/ph/allvisit_", script: "gen.js" },
        { title: "月点击榜", input: "/ph/monthvisit_", script: "gen.js" },
        { title: "周点击榜", input: "/ph/weekvisit_", script: "gen.js" },
        { title: "总推荐榜", input: "/ph/allvote_", script: "gen.js" },
        { title: "月推荐榜", input: "/ph/monthvote_", script: "gen.js" },
        { title: "周推荐榜", input: "/ph/weekvote_", script: "gen.js" },
        { title: "收藏榜", input: "/ph/goodnum_", script: "gen.js" },
        { title: "字数榜", input: "/ph/size_", script: "gen.js" },
        { title: "最新入库", input: "/ph/postdate_", script: "gen.js" },
        { title: "最近更新", input: "/ph/lastupdate_", script: "gen.js" }
    ]);
}