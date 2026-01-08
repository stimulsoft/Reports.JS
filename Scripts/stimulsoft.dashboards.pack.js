!function(e){
        'object'==typeof exports&&'undefined'!=typeof module?module.exports=((s)=>Object.assign(s,e(s.Stimulsoft)))(require('./stimulsoft.reports.pack'))
        :'function'==typeof define&&define.amd?define(['./stimulsoft.reports.pack'],(s)=>Object.assign(s,e(s.Stimulsoft))):Object.assign(window,e(window.Stimulsoft))}
        (function(Stimulsoft){
        if(Stimulsoft){
        if(Stimulsoft.__engineVersion&&Stimulsoft.__engineVersion!=='2026.1.2')
        console.warn('Scripts versions mismatch: engine ver. = %s; dashboards ver. = 2026.1.2', Stimulsoft.__engineVersion);
        else if(Stimulsoft.__reportsVersion!=='2026.1.2')
        console.warn('Scripts versions mismatch: reports ver. = %s; dashboards ver. = 2026.1.2', Stimulsoft.__reportsVersion);
        }
        return{Stimulsoft:Stimulsoft||{}};});