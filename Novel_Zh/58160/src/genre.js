function execute() {
    return Response.success([
        {title: "玄幻奇幻", input: "/xclass/1/", script: "zen.js"},
        {title: "武侠仙侠", input: "/xclass/2/", script: "zen.js"},
        {title: "都市言情", input: "/xclass/3/", script: "zen.js"},
        {title: "历史军事", input: "/xclass/4/", script: "zen.js"},
        {title: "游戏竞技", input: "/xclass/5/", script: "zen.js"},
        {title: "科幻灵异", input: "/xclass/6/", script: "zen.js"},
        {title: "其他类型", input: "/xclass/7/", script: "zen.js"}
    ]);
}