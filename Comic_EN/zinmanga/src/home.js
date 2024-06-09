load('config.js');
function execute() {
    return Response.success([
        {title: "Home", input: "/?s&post_type=wp-manga&m_orderby=latest", script: "gen.js"}
    ]);
}