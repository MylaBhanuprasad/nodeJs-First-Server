const http=require('http')

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','html')
    res.write('<html>')
    res.write('<head><title>First  page</title></head>')
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>')
})

server.listen(4000)