!function(e){
        'object'==typeof exports&&'undefined'!=typeof module?module.exports=((s)=>Object.assign(s,e(s.Stimulsoft)))(require('./stimulsoft.reports'))
        :'function'==typeof define&&define.amd?define(['./stimulsoft.reports'],(s)=>Object.assign(s,e(s.Stimulsoft)))
        :window.Stimulsoft=e(window.Stimulsoft).Stimulsoft}(function(Stimulsoft){
        if(Stimulsoft){
        if(Stimulsoft.__engineVersion&&Stimulsoft.__engineVersion!=='2025.4.2')
        console.warn('Scripts versions mismatch: engine ver. = %s; dashboards ver. = 2025.4.2', Stimulsoft.__engineVersion);
        else if(Stimulsoft.__reportsVersion!=='2025.4.2')
        console.warn('Scripts versions mismatch: reports ver. = %s; dashboards ver. = 2025.4.2', Stimulsoft.__reportsVersion);
        }
        return {Stimulsoft,StiOptions:Stimulsoft.StiOptions};});