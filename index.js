Element = 'undefined';
moment_mod = require('moment');
var Stimulsoft = require('./stimulsoft.reports');
JSZip = require('jszip');
xmldoc = require('xmldoc');
XLSX = require('xlsx');
xxhash = require('xxhash');
XXH = {h32: function(str, seed) {return xxhash.hash(Buffer.from(str, 'utf8'), seed)}};
Stimulsoft.System.Drawing.Graphics.opentypeClass = require('opentype.js');

module.exports = Stimulsoft;
Stimulsoft.System.NodeJs.useWebKit = false;
Stimulsoft.System.NodeJs.initialize();