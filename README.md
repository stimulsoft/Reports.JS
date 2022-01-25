# Stimulsoft Reports.JS
Stimulsoft Reports.JS is a set of reporting tools designed on JavaScript and HTML5 technologies. The report generator works in any JavaScript application, and installation of any browser extensions or frameworks is not required. The product contains everything you need to create, edit, build, view, and export reports to PDF, PowerPoint, HTML, Word, Text, Excel, OpenDocument Writer and Calc, Image (Svg) and Data (Csv).

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
The free trial versions of Stimulsoft Reports.JS for Node.js are fully functional. The limitation is **120 days** and a **Trial** watermark on the pages. You do not need to install a special version to activate the product and just add a license key.

# Integration
Stimulsoft Reports.JS is excellent for working in any JavaScript application. Components are optimized to work with most popular frameworks such as Node.js, Angular, React, Vue.js, etc. You may use the Publish wizard to integrate your reports into the project.

# Live Demo
We prepared many templates of reports and dashboards that you can explore and edit in our online demo. Choose the template you need, connect your data, and create rich reports and analytical dashboards – the solution is ready. Try the [Live Demo](http://demo.stimulsoft.com/#Js)

# More about product
In Stimulsoft Reports.JS, we have included a complete set of tools and components to design simple and complex reports. Texts, images, charts, barcodes, many preset styles, grouping and filtering, interactive reports, and much more. You can work with reports and their components directly from the JavaScript code. Read more about [Stimulsoft Reports.JS](https://www.stimulsoft.com/en/products/reports-js).

# Video and Documentation
We provide User Manuals and Class References intended to give technical assistance to users of our reporting tool. Find more information in the [Online Documentation](https://www.stimulsoft.com/en/documentation/online/programming-manual/index.html?reports_js.htm).

Also, we prepared many videos about the working of our software. Watch videos on our [YouTube channel](https://www.youtube.com/c/StimulsoftVideos/videos).

[Download](https://www.stimulsoft.com/en/downloads)

[License Info](https://github.com/stimulsoft/Reports.JS/blob/HEAD/LICENSE.md)

[Online Store](https://www.stimulsoft.com/online-store#embedded/reports/js)

