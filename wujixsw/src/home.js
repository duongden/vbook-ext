function execute() {
    return Response.success([
        {title: "首页", input: "https://wujixsw.com/", script: "gen.js"},
        {title: "玄幻小说", input: "https://wujixsw.com/xuanhuanxiaoshuo/", script: "gen.js"},
        {title: "修真小说", input: "https://wujixsw.com/xiuzhenxiaoshuo/", script: "gen.js"},
        {title: "都市小说", input: "https://wujixsw.com/dushixiaoshuo/", script: "gen.js"},
        {title: "网游小说", input: "https://wujixsw.com/wangyouxiaoshuo/", script: "gen.js"},
        {title: "科幻小说", input: "https://wujixsw.com/kehuanxiaoshuo/", script: "gen.js"},
        {title: "其它小说", input: "https://wujixsw.com/qitaxiaoshuo/", script: "gen.js"}
    ]);
}