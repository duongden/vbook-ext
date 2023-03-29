function execute() {
    return Response.success([
        {title: "首页", input: "/", script: "gen.js"},
        {title: "玄幻小说", input: "/xuanhuanxiaoshuo/1_{0}.html", script: "gen.js"},
        {title: "修真小说", input: "/xiuzhenxiaoshuo/2_{0}.html", script: "gen.js"},
        {title: "都市小说", input: "/dushixiaoshuo/3_{0}.html", script: "gen.js"},
        {title: "穿越小说", input: "/chuanyuexiaoshuo/4_{0}.html", script: "gen.js"},
        {title: "网游小说", input: "/wangyouxiaoshuo/5_{0}.html", script: "gen.js"},
        {title: "科幻小说", input: "/kehuanxiaoshuo/6_{0}.html", script: "gen.js"}
    ]);
}