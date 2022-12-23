module.exports = {
  engine: ({ marp }) =>
    marp
      .use(require("markdown-it-mark"))
      .use(require("markdown-it-plantuml"), {
        openMarker: "```plantuml\n@startuml",
        closeMarker: "```",
      })
      .use(require("markdown-it-mermaid-plugin"), {
        openMarker: "```mermaid",
        closeMarker: "```",
      }),
};
