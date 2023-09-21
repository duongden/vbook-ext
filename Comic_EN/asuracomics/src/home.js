function execute() {
    return Response.success([
        //https://asuracomics.com/manga/?status=ongoing&order=update
        {title: "Latest Updates", input: "status=&order=update", script: "gen.js"},
        {title: "Manhwa", input: "type=manhwa&order=title", script: "gen.js"},
        {title: "Manhua", input: "status=&type=manhua&order=title", script: "gen.js"},
        {title: "Ongoing", input: "status=ongoing&type=&order=title", script: "gen.js"},
        {title: "Completed", input: "status=completed&type=&order=update", script: "gen.js"},
        {title: "Dropped", input: "status=dropped&type=&order=update", script: "gen.js"}
    ]);
}