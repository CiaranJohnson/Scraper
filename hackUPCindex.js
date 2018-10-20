const fs = require('fs');
const http = require('http');
const https = require('https');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


function getHtml(url, callback) {
  let request = https;
  if (!url.includes('https')) request = http;
  request.get(url, response => {
    let data = '';
    response.on('data', chunk => data += chunk);
    response.on('end', () => callback(null, data));
  }).on('error', err => {
    console.log('ERROR performing the request: ' + err.message, err);
    return callback(err);
  });
}


function getText(elements) {
  let text = '';
  if (elements && elements.forEach) {
    elements.forEach(element => {
      text += (element.textContent || element.text || element.value || '').trim() + '\n';
    });
  }
  return text;
}

//function processHtml(html, opts, print) {
function processHtml(html, opts, print) {

  // Loading HTML
  let dom = new JSDOM(html);
  let document = dom.window.document;
  // Splitting text headings and paragraphs
  let text = {
    title: getText(document.querySelectorAll(opts.h1 || 'h1')),
    body: getText(document.querySelectorAll(opts.text || 'p'))
  };
  // Writing output file
  if (opts.output) {
    fs.writeFileSync(urls.output, text.full, 'utf8');

  } else if (print) {
    console.log(text.full);
    fs.writeFile('output.json', JSON.stringify(text, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');
    return(err, text);
  });
  }
}

module.exports = {
  getHtml,
  getText,
  processHtml
};
