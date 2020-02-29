module.exports=function(){
    var client = 'client',
        clientApp='./client/app',
        tmp = '.tmp',
        docs = 'documentation',
        landing = 'landing';
    var config ={
        client:client,
        tmp:tmp,
        index:client +"/index.html",
        alljs:[
            client+"/app/**/*.js",
            './*.js'
        ],
        assetsToCopy:[
            client + '/bower_components/webfontloader/webfontloader.js',
            client + "/app/**/*.html",
            client + '/assets/**/*',
            client + '/data/**/*',
            client + '/vendors/**/*',
            client + "/bower_components/font-awesome/css/*", 
            client + "/bower_components/font-awesome/fonts/*", 
            client + "/styles/loader.css", 
            client + "/styles/ui/images/*", 
            client + "/favicon.ico" 
        ],
        less:[],
        sass:[
            client+"/styles/**/*.scss"
        ],
        js: [
            clientApp + "/**/*.module.js",
            clientApp + "/**/*.js",
            '!' + clientApp + "/**/*.spec.js"
        ],
        docs: docs, 
        docsPug: [
            docs + "/pug/index.pug",
            docs + "/pug/faqs.pug",
            docs + "/pug/layout.pug"
        ],
        allToClean: [
            tmp, 
            ".DS_Store",
            ".sass-cache",
            "node_modules",
            ".git",
            client + "/bower_components",
            docs + "/pug",
            docs + "/layout.html",
            landing + "/pug",
            landing + "/bower_components",
            "readme.md"
        ]

    };
    return config;
}