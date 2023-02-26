function execute() {
    return Response.success([
        { title: "首页", input: "https://www.97xiaoshuo.net/", script: "gen.js" },
        { title: "玄幻小说", input: "https://www.97xiaoshuo.net/xuanhuanxiaoshuo/", script: "gen.js" },
        { title: "修真小说", input: "https://www.97xiaoshuo.net/xiuzhenxiaoshuo/", script: "gen.js" },
        { title: "都市小说", input: "https://www.97xiaoshuo.net/dushixiaoshuo/", script: "gen.js" },
        { title: "历史小说", input: "https://www.97xiaoshuo.net/chuanyuexiaoshuo/", script: "gen.js" },
        { title: "网游小说", input: "https://www.97xiaoshuo.net/wangyouxiaoshuo/", script: "gen.js" },
        { title: "科幻小说", input: "https://www.97xiaoshuo.net/kehuanxiaoshuo/", script: "gen.js" },
        { title: "其它小说", input: "https://www.97xiaoshuo.net/qitaxiaoshuo/", script: "gen.js" }
    ]);
}