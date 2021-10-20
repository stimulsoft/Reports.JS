# Stimulsoft Reports.JS
Stimulsoft Reports.JS is a reporting tool for Node.js and JavaScript applications. You can create new and load already created reports, easily connect to various databases, and export the report to PDF, HTML, Worl, Excel, Image and other formats.

# How to install
Ceate a project folder and install Reports.JS module using the specified command:
```
npm install stimulsoft-reports-js
```

# How to load and save a report
Create index.js file in the folder, and add the required code:
```js
// Stimulsoft reports module loading
var Stimulsoft = require('stimulsoft-reports-js');

// Loading fonts
Stimulsoft.Base.StiFontCollection.addOpentypeFontFile("Roboto-Black.ttf");

// Creating a new report object
var report = Stimulsoft.Report.StiReport.createNewReport();

// Loading a report template (MRT) into the report object
report.loadFile("report1.mrt");

// Renreding the report
report.renderAsync(() => {

}

// Exporting the report to PDF
report.exportDocumentAsync((pdfData) => {

}

// Saving the report object into a template file (MRT)
report.saveFile("report2.mrt");

// Saving the rendered report object into a document file (MDC)
report.saveDocumentFile("report3.mdc");
```

# How to run
Open console and run index.js
```
node index
```

# Trial limitation
The free trial versions of Stimulsoft Reports.JS for Node.js are fully functional. The limitation is **120 days** and a **Trial** watermark on the pages. To activate the product, you do not need to install a special version, just add a license key.

Read more about [Stimulsoft Reports.JS](https://www.stimulsoft.com/en/products/reports-js)

You can try the [Live Demo](http://demo.stimulsoft.com/#Js)

More information in the [Online Documentation](https://www.stimulsoft.com/en/documentation/online/programming-manual/index.html?reports_js.htm)

[Free Download](https://www.stimulsoft.com/en/downloads)

[License](LICENSE.md)
