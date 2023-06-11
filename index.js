const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

function convertMarkdownToHTML(markdownContent) {
  return md.render(markdownContent);
}

module.exports = { convertMarkdownToHTML };
