function execute() {
    return Response.success([
        { title: "玄幻小说", input: "/class1/", script: "gen.js" },
        { title: "仙侠小说", input: "/class2/", script: "gen.js" },
        { title: "都市生活", input: "/class3/", script: "gen.js" },
        { title: "穿越小说", input: "/class4/", script: "gen.js" },
        { title: "游戏小说", input: "/class5/", script: "gen.js" },
        { title: "科幻小说", input: "/class6/", script: "gen.js" }
    ]);
}