var hugolunr = require('lunr-hugo');
var h = new hugolunr();
h.setInput('../content/news/**');
h.setOutput('../static/news/news.json');
console.info('resources search done');
h.index();