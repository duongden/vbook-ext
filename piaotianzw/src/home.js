function execute() {
    return Response.success([
        {title: "首页", input: "http://www.piaotian.la/", script: "gen.js"},
        {title: "玄幻小说", input: "http://www.piaotian.la/xuanhuan/", script: "gen.js"},
        {title: "修真小说", input: "http://www.piaotian.la/xiuzhen/", script: "gen.js"},
        {title: "都市小说", input: "http://www.piaotian.la/dushi/", script: "gen.js"},
        {title: "历史小说", input: "http://www.piaotian.la/lishi/", script: "gen.js"},
        {title: "网游小说", input: "http://www.piaotian.la/wangyou/", script: "gen.js"},
        {title: "科幻小说", input: "http://www.piaotian.la/kehuan/", script: "gen.js"},
        {title: "完本小说", input: "http://www.piaotian.la/wanben/", script: "gen.js"}

    ]);
}