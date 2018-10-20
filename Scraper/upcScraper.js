const scraper = require('./hackUPCindex.js')


const argv = require('yargs')
  .usage('Usage: $0 --url <url> ')
  .option('run', {
    alias: 'r',
    describe: 'Run your program',
    demandOption: false
  })
  .option('url', {
    alias: 'u',
    describe: 'Url to get the text from',
    demandOption: true
  })
  .option('h1', {
    describe: 'Selector for title',
    default: 'h1'
  })
  .option('text', {
    alias: 't',
    describe: 'Selector for text',
    default: 'p'
  })
  .option('output', {
    alias: 'o',
    describe: 'Output file path'
  })
  .argv;


(function run() {
  const url = argv.url;
  scraper.getHtml(url, (err, html) => {
    if (err) {
      return console.log('ERROR performing the request: ' + err.message, err);
    }
    scraper.processHtml(html, argv, true);
  });
})();
