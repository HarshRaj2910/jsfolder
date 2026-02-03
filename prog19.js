const http=require('http');
const url=require('url');
const fs=require('fs');
const PORT=5000;
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const path=parsedUrl.pathname;
    const method=req.method;
    if(path==='/' && method==='GET')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Home Page</h1>');
    } else if (path==='/about' && method ==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>About Page</h1>');

    }else if(path==='/users' && method ==='GET'){
        const id=parsedUrl.query.id;
        res.writeHead(200,{'Content-Type':'application/json'});
        if(id){
            res.end(JSON.stringify({id:id,name:`User${id}`}));    
        } else {
            res.end(JSON.stringify([
                {
                    id:1,name:'Demo Name'
                }
            ]));
        }

    } else if(path==='/data' && method==='POST'){
        let body='';
        req.on('data',chunk => body += chunk);
        req.on('end',()=>{
            let parsedBody;
            try{

                parsedBody=JSON.parseBody(body)
            } catch{
                parsedBody={raw:body};
            }
            res.writeHead(201,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'Data received',data: parsedBody}));
        })

    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('404 Not Found');
    }
    }
);
server.listen(PORT,()=>console.log('Server started'));