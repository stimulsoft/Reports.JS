Element = 'undefined';
var Stimulsoft = require('./stimulsoft.reports');
JSZip = require('jszip');
xmldoc = require('xmldoc');
XLSX = require('xlsx');
Stimulsoft.System.Drawing.Graphics.opentypeClass = require('opentype.js');

module.exports = Stimulsoft;
Stimulsoft.System.NodeJs.useWebKit = false;
Stimulsoft.System.NodeJs.initialize();