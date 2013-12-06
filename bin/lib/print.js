var page = require('webpage').create();
var args = require('system').args;

page.viewportSize = { width: 1600, height: 992 };

page.paperSize = { format: 'A4', orientation: 'portrait', border: '1cm' }

page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.75 Safari/535.7';

page.open(args[1], function () {
	window.setTimeout(function () {
	console.log(page.render(args[2]));
	    phantom.exit();
	}, 200);    

});
