/* ######<<<< vs-36 <<<<<<<< Epi-1 >>>>>>>>>>>>>>>>>> node.js introduction >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-73 <<<<<<<< Epi-2 >>>>>>>>>>>>>>>>>> Tools & Terminal >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-83 <<<<<<<< Epi-3 >>>>>>>>>>>>>>>>>> Node.js Module >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-92 <<<<<<<< Epi-4 >>>>>>>>>>>>>>>>>> node.js introduction >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-101 <<<<<<<< Epi-5 >>>>>>>>>>>>>>>>> 1. Core Modules = Request & Response >>>>>>>>>>>>>>> */
/* ######<<<< vs-114 <<<<<<<< Epi-6 >>>>>>>>>>>>>>>>> node.js introduction >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-145 <<<<<<<< Epi-7 >>>>>>>>>>>>>>>>> Understanding http client >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-184 <<<<<<<< Epi-8 >>>>>>>>>>>>>>>>> Package.json file  >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-206 <<<<<<<< Epi-9 >>>>>>>>>>>>>>>>> URL Module  <<<<<<<<< 1. Core Modules >>>>>>>>>>>> */
/* ######<<<< vs-235 <<<<<<<< Epi-10 >>>>>>>>>>>>>>>> 1. Core Modules = fs = Kinds of 2 methods >>>>>> */
/* ######<<<< vs-264 <<<<<<<< Epi-11 >>>>>>>>>>>>>>>> 1. Core Modules = Synchronous & Asynchronous >>>>>>> */
/* ######<<<< vs-277 <<<<<<<< Epi-12 >>>>>>>>>>>>>>>> 1. Core Modules = Synchronous & Asynchronous>>>>> */
/* ######<<<< vs-280 <<<<<<<< Epi-14 >>>>>>>>>>>>>>>>  fs ready file ready html page >>> */
/* ######<<<< vs-303 <<<<<<<< Epi-15 >>>>>>>>>>>>>>>> 1. Core Modules = fs readFile Synchronouns >>>>>>>>>>>>>>>> */
/* ######<<<< vs-331 <<<<<<<< Epi-16 >>>>>>>>>>>>>>>> fsFile Write Asynchronous >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-357 <<<<<<<< Epi-17 >>>>>>>>>>>>>>>> fsFile Write Synchronous >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-377 <<<<<<<< Epi-18 >>>>>>>>>>>>>>>> fs.rename Asynchronous >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-401 <<<<<<<< Epi-19 >>>>>>>>>>>>>>>> fs.rename Synchronous >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-422 <<<<<<<< Epi-20 >>>>>>>>>>>>>>>> fs.unlind (delete) Asynchronous  >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-443 <<<<<<<< Epi-21 >>>>>>>>>>>>>>>> fs.unlind (delete) Synchronous >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-464 <<<<<<<< Epi-22 >>>>>>>>>>>>>>>> fs.Exists Asynchronous >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-486 <<<<<<<< Epi-23 >>>>>>>>>>>>>>>> fs.Exists Synchronous >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-507 <<<<<<<< Epi-Epi-24-25-26 >>>>>> Create simple website & Deploy To Real sercer >> */
/* ######<<<< vs-544 <<<<<<<< Epi-26 >>>>>>>>>>>>>>>> Create simple website & Deploy To Real sercer >>>>>>>>> */
/* ######<<<< vs-568 <<<<<<<< Epi-27 >>>>>>>>>>>>>>>> Create simple website & Deploy To Real sercer >>>>>>>>>>>> */
/* ######<<<< vs-596 <<<<<<<< Epi-28 >>>>>>>>>>>>>>>> Node.js Debugging >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-630 <<<<<<<< Epi-29-30-31 >>>>>>>>>> Node.js Debugging  >>>>>>>>>>>>>>>>>>>>>>>>> */
/* ######<<<< vs-633 <<<<<<<< Epi-32 >>>>>>>>>>>>>>>> node.js introduction >>>>>>>>>>>>>>>>>>>>>>>>> */





// 429 = Suppot = exists remark dekay

//######<<<<<<<<<<<< Epi-1   >>>>>>>>>>>>>>>> node.js introduction >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// What is node.js?
// Javascript December 1995 - 2009 April
// ## javascript Node.js ?
/*  Ans : Javascript created as client side language / front end language. Only handle front end logics. 
Javascript has no power to communicate with server. */

//## Javascript can do : ?
//1. interact with temporary stoage
//2. Make interactive web page
//3. Interactive with local storage
//4. Sending request for data fo server
//5. Send request to server
//6. work as an interative between server and used

//## Ryan Dahl create an awesome Platform may-2009 This is Node.js Tool.
// Browser & Server side show
//### Javascript can not do 2009 : This is Node.js Tool ?
//1. Querying the database
//2. Operating over database
//3. Access/Write a file on server.
//4. Server side request, Response Handle
//5. Software Backend Operations

//#### Third party Library management = NPM = (Node package manager)
//...is Node js a programming language = No
//...Node.js installation // Download windows (x64)

//## yern package management >> Link : https://yarnpkg.com/

//## npm js package management  << Owner - Mycrosoft - Bill gates >>>

//## Node.js Own Library

//##  Mern-x (Rabbil sir side) = https://www.npmjs.com/~rupomsoft?activeTab=packages

//######<<<<<<<<<<<< Epi-2   >>>>>>>>>>>>>>>> Tools & Terminal >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// VS Code & Webstrom installation
//#### Terminal :
//1. Windows = cmd
//2. Windows PowerShell
//3. VS Code Terminal Option
//4. Node.js Terminal
//5. Webstrom Terminal Option

//######<<<<<<<<<<<< Epi-3 >>>>>>>>>>>>>>>> Node.js Module >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//## Module in Node.js is a simple / complex functionality organized in single or multiple js files
//## Node.js includes three types of modules :

// 1. Core Modules => Node.js platform
// 2. Local Modules => self create
// 3. Third Praty Modules ==> more third party manager

//###<<< Epi-4 <<<<<<<>>>>>>>>> 1. Core Modules = http, url, querystring, path, fs, util >>>>>>>>>>>>>>>>>>>>>>>

//1. http => http module include classes, methods & evets to create Node.js http server.
//2. url => url module include method for URL resolution & parsing
//3. querystring => querystring module includes methods to deal with query string
//4. path => path module includes deal with file path
//5. fs = file system => fs module include classes, methods & events to work with file I/O.
//6. util => util module include utility function useful for parameters

//###< Epi-5 >>> 1. Core Modules = Request & Response >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Server create
// RangeError [ERR_SOCKET_BAD_PORT]: options.port should be >= 0 and < 65536. Received type number (505050).
/* let http = require("http");
// server create
let server = http.createServer(function (req, res) {
  res.end("hello");
});
//port create
server.listen(50500);

console.log("Server Run Successfully"); */

//###< Epi-6 >>>>>>>> 1. Core Modules = How Request & Response Module works in node.js >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Response = Status => 200, 400, 500
// Response = Head, Body
// The full form of HTTP is the =  Hypertext Transfer Protocol.
// https = HyperText Transfer Protocol Secure

//http://localhost:5050/ = Home page
///http://localhost:5050/contact = Contact page

/* let http = require("http");
const { type } = require("os");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2> This is Home page </h2>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("This is About page");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("This is Content page");
    res.end();
  }
});

server.listen(5050);
console.log("success"); */

//###< Epi-7 >>>>>>>> Understanding http client <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//## jaha Server HTTP Request send  & Response receive kre, takai HTTP Clinet ble
//1. Axios
//2. Fetch
//3. Jquery Ajax
//4. cURL = php
//5. Volly = js
//6. Retrofit = js
//7. RestSharp = C#

//###HTTP client for testing
//1. Postman = create platform = interactive.js
//2. Fiddler

// Postman check URL = http://localhost:5050/ =>> Method ( Get )
/* let http = require("http");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2> This is Home page </h2>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("This is About page");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("This is Content page");
    res.end();
  }
});

server.listen(5050);
console.log("success"); */

//### Tasting :
// prostman = localhost:5050/about = runing successful = Postman destop downloaded

//###< Epi-8 >>>>>>>> Package.json file  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//package.json file >>>>>>>>
//1. Holds various metadata relevant to the project
//2. handle the project's dependencies
//3. Used identify the project
//4. Used to hold application information

//#### Terminal = npm init --y
/* {
  "name": "pre-recod-video",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
  } */

//###< Epi-9 >>>>>>>> URL Module  <<<<<<<<< 1. Core Modules <<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//#### Built-in URL Module
//1. The TRL module splits up a web address into readable parts
//2. http://raddil.com/blog.html?year=2020&month=july

/* let http = require("http");
let URL = require("url");

let server = http.createServer(function (req, res) {
  let myUrl = "http://raddil.com/blog.html?year=2020&month=july";
  let urlObj = URL.parse(myUrl, true);
  
  let myHost = urlObj.host;
  let myPath = urlObj.pathname;
  let mySearch = urlObj.search;
  
  res.writeHead(200, { "content-type": "text/html" });
  //res.write(myHost); // Ans : raddil.com
  //res.write(myPath); // Ans : /blog.html
  res.write(mySearch); // Ans : ?year=2020&month=july
  res.end;
});

server.listen(5050);
console.log("Success"); */

// Terminal = start krte hbe
// After = Chrome Browser = localhost:5050

//###< Epi-10 >>><<<<<<<<<<<<<<<<<<<<<<<<<<< 1. Core Modules = fs = Kinds of 2 methods <<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//## Node.js includes fs module to access physical file system
//## The fs module is responsible for all the Asynchronous OR Synchronous file 1/0 operation
//## Synchronous = Loading...Loading..You wait for it to finish... After fininsh you can move // No multiple tast

//## Asynchronous = No Loading... No Loading.. No need to wait...you can move
/* fs.readFile(fileName[.options],callback + function add)
fs.writeFile(fileName, data[options],callback)
fs.rename(oldPath, newPath, callback)
fs.exists(path, callback)
fs.unlink(path, callback)
fs.appendFile(file, data, [options], callback)
fs.open(path, flags, [mode], callbac)
fs.mkdir(path[mode], callback)
fs.rmdir(path, callback)
fs.readdir(path, callback) */

//## Synchronous = Loading...Loading..You wait for it to finish... After fininsh you can move
/* fs.readFileSync(fileName[.options],callback)
fs.writeFileSync (fileName, data[options],callback)
fs.renameSync (oldPath, newPath, callback)
fs.existsSync (path, callback)
fs.unlinkSync (path, callback)
fs.appendFileSync (file, data, [options], callback)
fs.openSync (path, flags, [mode], callbac)
fs.mkdirSync (path[mode], callback)
fs.rmdirSync (path, callback)
fs.readdirSync (path, callback) */

//###< Epi-11 >>><<<<<<<<<<<<<<<<<<<<<<<<<<< 1. Core Modules = Synchronous & Asynchronous >>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* ## Synchronous Transmission = NO multi tast >>>>>>>>>>>>>>>>
 Sender--------Flow of data---------Receiver
1. Client computer-----Http Request-----Server
2. Server--------------Response  -------Client computer
3. Loading Loading..../ You wait for it to finish / After fininsh you can move */

/* #### Asynchronous Transmission = more multi tast......>>>>>>>>>>>>>>>>>>>>
1.  Sender--[1234]--(slow)--[3234]---Flow of data--[233]--(slow)--[2323]---Receiver
                            Stop bit                  Data              Start bit
1. Client computer-----Http Request-----Server
2. Server--------------Response  -------Client computer */

//###< Epi-12 >>><<<<<<<<<<<<<<<< 1. Core Modules = Synchronous & Asynchronous >>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Client---Request---upload--Compress----Formating----Copyright---Response-----Clinet

//###< Epi-14 >>><<<<<<<<<<<<<<<<  fs ready file ready html page >>>>>>>>>>>>>>>>>>>>>>>>>>>>
//## html file >>>>>>>>>>>>>>>
/* <h1>This is Home page</h1>
<button onclick="alertMe()">Click Me</button> */

//### fsModule.js >>>>>>>>>>>>>>>>>>> file
/* let fs = require("fs");
let http = require("http");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    //Asyn
    fs.readFile("index.html", function (error, data) {
      res.writeHead(200, { "content-type": "text.html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(5050);
console.log("Server Run successful");
 */
//###< Epi-15 >>><<<<<<<<<<<<<<<< 1. Core Modules = fs readFile Synchronouns >>>>>>>>>>>>>>>>>>>>>>>>>>>>
//#### Return index.html data Show
//## Vs code File show

/* function onClick() {
  alert("kdsa");
  } */

// Synchronouns systems
/* let http = require("http");
 let fs = require("fs");
 
 let server = http.createServer(function (req, res) {
  if (req.url) {
    let myData = fs.readFileSync("index.html");

    res.writeHead(200, { "constent-type": "text/html" });
    res.write(myData);
    res.end();
    }
    });
    
    server.listen(5050);
    console.log("Hi"); */

// fs.readFile("index.html", function (error, data) { // Asynchronous
//let myData = fs.readFileSync("index.html"); // Synchronous

//###< Epi-16 >>><<<<<<<<<<<<<<<< fsFile Write Asynchronous >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//### Create vs code File
//### exictign file OverRidding
/* let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    fs.writeFile("demo1.html", "Wellcome lkjfa to Node.js", function (error) {
      if (error) {
        res.writeHead(200, { "content-type": "text.html" });
        res.write("File write Fail");
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("File write success");
      }
    });
  }
});
s;
server.listen(5050);
console.log("Hi"); */

// Answer :Overidding file =  Wellcome to Node.js

//###< Epi-17 >>><<<<<<<<<<<<<<<< fsFile Write Synchronous >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url) {
    let error = fs.writeFileSync("demoSyn.js", "Wellcome to file Sync");
    if (error) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("File write fail");
      res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
      res.write("Success file");
      }
      }
      });
      server.listen(5050);
      console.log("Success"); */

//###< Epi-18 >>><<<<<<<<<<<<<<<< fs.rename Asynchronous >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//### Create vs code File
//### exictign file OverRidding
/* let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    fs.rename("demo1.js", "demo3.js", function (error) {
      if (error) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("File Rename failed");
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
      res.write("File Rename Successful");
      res.end();
      }
      });
      }
      });
      server.listen(5050);
      console.log("Successful"); */

//###< Epi-19 >>><<<<<<<<<<<<<<<< fs.rename Synchronous >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    let error = fs.renameSync("demo3.js", "demo1.js");
    if (error) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("Failed");
      res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
      res.write("Success");
      res.end();
      }
      }
      });
      server.listen(5050);
      console.log("hi"); */

//###< Epi-20 >>><<<<<<<<<<<<<<<< fs.unlind (delete) Asynchronous >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* let fs = require("fs");
let http = require("http");

let server = http.createServer(function (req, res) {
  fs.unlink("demo2.js", function (error) {
    if (error) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("Failed");
      res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
      res.write("Success");
      res.end();
      }
      });
      });
      
      server.listen(5050);
      console.log("Hi"); */

/* //###< Epi-21 >>><<<<<<<<<<<<<<<< fs.unlind (delete) Synchronous >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    let error = fs.unlinkSync("demo.js");
    if (error) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("Failed");
      res.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("Successful");
      res.end();
    }
  }
});
server.listen(4040);
console.log("Hi"); */

/* //###< Epi-22 >>><<<<<<<<<<<<<<<< fs.Exists Asynchronous >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// File finding
// True // False
// Path link

/* let http = require("http");
let fs = require("fs");
let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    fs.exists("index.js", function (error) {
      if (error) {
        res.end("true");
      } else {
        res.end("false");
      }
    });
  }
});

server.listen(4040);
console.log("Hello"); */

/* //###< Epi-23 >>><<<<<<<<<<<<<<<< fs.Exists Synchronous >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// File finding
// True // False
// Path link

/* let http = require("http");
let fs = require("fs");
let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    let result = fs.existsSync("index.js");
    if (result) {
      res.end("true in");
    } else {
      res.end("false");
    }
  }
});

server.listen(5050);
console.log("Hello"); */

/* //###< Epi-24-25-26 >>><<<<<<<<<<<<<<<< Create simple website & Deploy To Real sercer >>>>>>>>>>>>>>>>>>>>>>>>>>> */
// https://www.heroku.com/
// Cpanel Hostting & Domain = Deployment
// Setup Node.js app =>
// By Default port get node.js
// UTF-8 =  (UCS Transformation Format 8

// Node.js Project-1

/* let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    let data = fs.readFileSync("index.html", "utf8");
    res.end(data);
  } else if (req.url == "/skill") {
    let data = fs.readFileSync("skill.html", "utf8");
    res.end(data);
  } else if (req.url == "/support") {
    let data = fs.readFileSync("support.html", "utf8");
    res.end(data);
  } else if (req.url == "/testimonial") {
    let data = fs.readFileSync("testimonial.html", "utf8");
    res.end(data);
  } else if (req.url == "/about") {
    let data = fs.readFileSync("about.html", "utf8");
    res.end(data);
  } else if (req.url == "/contact") {
    let data = fs.readFileSync("contact.html", "utf8");
    res.end(data);
  }
});

server.listen(5050);
console.log("successful"); */

//###< Epi-26 >>><<<<<<<<<<<<<<<< Create simple website & Deploy To Real sercer >>>>>>>>>>>>>>>>>>>>>>>>>>>
// Cpanel Node.js project Deployment

// Setup Node.js app
/* => Create Application 
=> Node.js version - 18.20.3 (recommended) 
=> Application mode - Development
=> Application root - cpanel create doamin = http://freelancerazizulhakim.com/
=> Application startup file = index.js
=> create = enter +

##### => File Manger + Domain + click + index.js + Edit + >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
+ Node.js Restart file +  */

/* var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var message = 'It works!\n',
  version = 'NodeJS ' + process.versions.node + '\n',
  response = [message, version].join('\n');
  res.end(response);
  });
  server.listen(); */

//###< Epi-27 >>><<<<<<<<<<<<<<<< Create simple website & Deploy To Real sercer >>>>>>>>>>>>>>>>>>>>>>>>>>>
// File manager + Upload file +
// All html file upload
//  Go Back to “/home1/freelancerazizul/freelancerazizulhakim.com”

// #### index.js + Modify + Edit + index.js Code copy to past +
/// Setup Node.js file + Restart +

/* if (req.url == "/") {
  let data = fs.readFileSync("index.html", "utf8");
  res.end(data);
} else if (req.url == "/skill") {
  let data = fs.readFileSync("skill.html", "utf8");
  res.end(data);
} else if (req.url == "/support") {
  let data = fs.readFileSync("support.html", "utf8");
  res.end(data);
} else if (req.url == "/testimonial") {
  let data = fs.readFileSync("testimonial.html", "utf8");
  res.end(data);
} else if (req.url == "/about") {
  let data = fs.readFileSync("about.html", "utf8");
  res.end(data);
} else if (req.url == "/contact") {
  let data = fs.readFileSync("contact.html", "utf8");
  res.end(data);
} */

//###< Epi-28 >>><<<<<<<<<<<<<<<< Node.js Debugging  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1. * Core Node.js debugger
//2. * Node inspector
//3. Built-in debugger in IDEs

/* let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    let data = fs.readFileSync("index.html", "utf8");
    res.end(data);
    } else if (req.url == "/skill") {
      let data = fs.readFileSync("skill.html", "utf8");
      res.end(data);
      } else if (req.url == "/support") {
        let data = fs.readFileSync("support.html", "utf8");
        res.end(data);
        } else if (req.url == "/testimonial") {
          let data = fs.readFileSync("testimonial.html", "utf8");
          res.end(data);
          } else if (req.url == "/about") {
            let data = fs.readFileSync("about.html", "utf8");
            res.end(data);
  } else if (req.url == "/contact") {
    let data = fs.readFileSync("contact.html", "utf8");
    res.end(data);
  }
  });
  
  server.listen(5050);
  console.log("successful"); */

//###< Epi-29 >>><<<<<<<<<<<<<<<< Node.js Debugging  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//###< Epi-30 >>><<<<<<<<<<<<<<<< Node.js Debugging  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//###< Epi-31 >>><<<<<<<<<<<<<<<< Node.js Debugging  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//###>>>> Epi-32 >>>>>>>>>>>> multiple js file add >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//### index.js >>> add multiple
//const server = require("./multiple-file-exprot");

//### demo.js create server
// Synchronouns systems
/* let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url) {
    let myData = fs.readFileSync("index.html");
    res.writeHead(200, { "constent-type": "text/html" });
    res.write(myData);
    res.end();
  }
});

module.exports = server;

server.listen(5050);
console.log("Hi"); */

//End >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End >>>>>>>>>>>>>>>>>
