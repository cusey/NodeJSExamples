![CuseyHub](https://github.com/cusey/ImageForWiki/blob/master/Logos/CuseyHub_Banner_Small.jpg)

![NodeJs Logo](https://github.com/cusey/ImageForWiki/blob/master/Logos/NodeJS.PNG)

# NodeJS Examples

# Getting Started    
To run the example programs execute the following command from the command line.      

```
$ chmod +x run.sh
$ ./0_Run.sh
```

# Content    
# Section 1 - NodeJS Fundamentals      
1. Introduction     
2. Function     
3. Import Function     
    You can put your functions in another file and import the functions.         
4. Arrow Function     
    Assign function to a constant variable.      
5. Object destructuring  
   The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.     
6. Http server 

<img 
src="https://github.com/cusey/ImageForWiki/blob/master/NodeJSExamples/http_server.png" 
alt="Http Server" 
height="175px"/> 

7. Npm     

* Creating the package json file 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
```
$ npm init
```
* Updating the packages

 npm install will install all modules listed as dependencies in package. All packages get
 saved in the node_modules folder. 
 ```
 $ npm install
 ```
 8. Express      
 9. Event Loop     

 10. Asynchronous programming    

 Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one.       

You are in a restaurant with many other people. You order your food. Other people can also order their food, they don't have to wait for your food to be cooked and served to you before they can order. In the kitchen restaurant workers are continuously cooking, serving, and taking orders. People will get their food served as soon as it is cooked.       

Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks.

For example, a function to read a file may start reading file and return the control to the execution environment immediately so that the next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as a parameter. So there is no blocking or wait for File I/O. This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function to return results.

The follow code is example of callback function in the _**10_Asynchromous_programming.js**_ code. 

```
(err, data) => {

    if(err){
        console.log(err)
    }
    
    console.log(data.toString());

}
```

11. Synchronous programming     

Synchronous basically means that you can only execute one thing at a time.     

You are in a queue to get a movie ticket. You cannot get one until everybody in front of you gets one, and the same applies to the people queued behind you.     

  # Section 2 - NodeJS API Development      

  12. Creating server with express    

Setup project        
```
$ npm init
$ npm install express   
$ npm install nodemon 
```

Start server directly      
```
$ node app12.js
```
OR uses the nodemon web server
```
$ nodemon app12.js
```

Start server with npm by configurating package.json file. 
```
$ npm run dev12
[nodemon] restarting due to changes...
[nodemon] starting `node app12.js`
NodeJS is listening on: 8012
```

<img 
src="https://github.com/cusey/ImageForWiki/blob/master/NodeJSExamples/app12_webpage.JPG" 
alt="app12_webpage" 
height="175px"/> 

