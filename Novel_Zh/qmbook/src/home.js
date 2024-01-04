function execute() {
    return Response.success([
        {title: "首页", input: "/", script: "gen.js"},
        {title: "最新入库小说", input: "/", script: "gen2.js"}
    ]);
}