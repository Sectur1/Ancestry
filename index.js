const http = require('http'),
    fs = require('fs')

let header = "", footer = "";
fs.readFile("./pages/footer.html",((err,data) => {if(!err) footer += data; }))
fs.readFile("./pages/header.html",((err,data) => {if(!err) header += data; }))
 
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./pages/index.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end("<h1><b>Sorry page not found</b></h1>")
            } else {
                res.statusCode = 200
                res.end(header + data +footer)
            }
        })
    }else if(req.url == "/ancestry-family"){
        
        fs.readFile('./pages/ancestry-family.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end(`<h1><b>Sorry ${req.url} not found</b></h1>`)
            } else {
                res.statusCode = 200
                res.end(header + data +footer)
            }
        }) 
    }else if(req.url == "/dna" || req.url == "/dna/"){
        fs.readFile('./pages/dna.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end(`<h1><b>Sorry ${req.url} not found</b></h1>`)
            } else {
                res.statusCode = 200
                res.end(header + data +footer)
            } 
        })
    }else if(req.url.includes("signin") ){
        fs.readFile('./pages/signin.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end(`<h1><b>Sorry ${req.url} not found</b></h1>`)
            } else {
                res.statusCode = 200
                res.end(data)
            } 
        })
    }else if(req.url.includes("account/create") ){
        fs.readFile('./pages/signup.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end(`<h1><b>Sorry ${req.url} not found</b></h1>`)
            } else {
                res.statusCode = 200
                res.end(data)
            } 
        })
    }else if(req.url.includes("/cs/legal/termsandconditions") ){
        fs.readFile('./pages/termsandconditions.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end(`<h1><b>Sorry ${req.url} not found</b></h1>`)
            } else {
                res.statusCode = 200
                res.end(header+data+footer)
            } 
        })
    }else if(req.url.includes("/cs/legal/AboutCookies") ){
        fs.readFile('./pages/about.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end(`<h1><b>Sorry ${req.url} not found</b></h1>`)
            } else {
                res.statusCode = 200
                res.end(header+data+footer)
            } 
        })
    }else if(req.url.includes("/cs/legal/community-rules") ){
        fs.readFile('./pages/community-rules.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end(`<h1><b>Sorry ${req.url} not found</b></h1>`)
            } else {
                res.statusCode = 200
                res.end(header+data+footer)
            } 
        })
    }else if(req.url.includes("/cs/legal/renewal-cancellation-terms") ){
        fs.readFile('./pages/renewal-cancellation-terms.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end(`<h1><b>Sorry ${req.url} not found</b></h1>`)
            } else {
                res.statusCode = 200
                res.end(header+data+footer)
            } 
        })
    }else if(req.url.includes("freetrial") ){
        fs.readFile('./pages/freetrial.html', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end(`<h1><b>Sorry ${req.url} not found</b></h1>`)
            } else {
                res.statusCode = 200
                res.end(data)
            } 
        })
    }else if (req.url.startsWith("/assets") || req.url.includes('.')) {
        fs.readFile(req.url.startsWith("/assets")?"./pages" +  decodeURI(req.url):"./pages/" + decodeURI(req.url.substring(5)), (err, data) => {
            if (err) {
                console.log(err) 
                res.statusCode = 404 
                res.end("<h1><b>Sorry page not found</b></h1>")
            } else {
                if (req.url.endsWith(".css")) {
                    res.statusCode = 200
                    res.setHeader("Content-Type", "text/css")
                    res.end("" + data)
                } else if (req.url.endsWith(".js")) {
                    res.statusCode = 200
                    res.setHeader("Content-Type", "text/javascript")
                    res.end("" + data)
                } else if (req.url.endsWith(".svg")) {
                    res.statusCode = 200
                    res.setHeader("Content-Type", "image/svg+xml")
                    res.end("" + data)
                } else if (req.url.endsWith(".jpeg") || req.url.endsWith(".jpg")) {
                    res.statusCode = 200
                    res.setHeader("Content-Type", "image/jpeg")
                    res.end(data)
                } else if (req.url.endsWith(".png")) {
                    res.statusCode = 200
                    res.setHeader("Content-Type", "image/png")
                    res.end(data)
                } else if (req.url.endsWith(".woff") || req.url.endsWith(".woff2")) {
                    res.statusCode = 200
                    res.setHeader("Content-Type", "font/woff")
                    res.end(data)
                }else if (req.url.endsWith(".ttf")) {
                    res.statusCode = 200
                    res.setHeader("Content-Type", "font/ttf")
                    res.end(data)
                }else if (req.url.endsWith(".eot")) {
                    res.statusCode = 200 
                    res.setHeader("Content-Type", "font/eot")
                    res.end(data)
                }else if (req.url.endsWith(".map")) {
                    res.statusCode = 200
                    res.setHeader("Content-Type", "application/json")
                    res.end(data)
                }else {
                    res.statusCode = 404
                res.end("<h1><b>Sorry page not found</b></h1>")
                }

            }
        })
    }else {
        console.log(req.url)
        res.statusCode = 404
        res.end("<h1><b>Sorry page not found</b></h1>")

    }
})

server.listen(8080, () => {
    console.log("Server listening on port 8080")
})

