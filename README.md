# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Several things happen when we click on a link: 1) the browser uses the DNS (Domain Name System) to get the IP (Internet Protocol) address associated with the website URL, 2) the browser opens a TCP (Transmission Control Protocol) connection to the website for the IP, 3) the TCP communicates with the HTTP (HyperText Transfer Protocol) server which then provides the HTML (HyperText Markup Language) that is rendered by the browser.

## From start to finish, how does data reach you to be rendered in the browser?

The Client (my computer) makes a request to the Server (someone else's computer) which checks for the file. If the file exists, the server transfers the data (including any necessary resources) via HTTP (HyperText Transfer Protocol) to be rendered by the browser.


## What code is rendered in the browser?

Most often HTML (HyperText Markup Language) and any resources (css, javaScript, images) are rendered in the browser.

More on Rendering: There are 4 steps involved in the rendering of a webpage: Request, Response, Build and Render. Request: text file is requested by the browser using HTTP (HyperText Transfer Protocol). Response: web server provides the file (often HTML) and any resources (images, css, JavaScript) to the web browser which then downloads the provided resources. Build: the browser builds up the page using the DOM (Document Object Model), CSSOM (Cascading Style Sheet Object Model) and the Render Tree which takes the DOM and CSSOM to create a map of how the page will be displayed. Render: the browser determines how big a screen is in order to properly display the content and proceeds to convert each node in the render tree to pixels on the screen.

## What is the server-side code’s main function?

Server-side code's main function is to interact with permanent storage like databasees and files. It also provides the data to be rendered by the browser and processes user input.

## What is the client-side code’s main function?

Client-side codes main function is to process the data provided by the server, and in many cases assists in the rendering of that data.

## What is runtime?

From Wikipedia: refers to the program lifecycle phase during which a computer program is executing; the length of time a program takes to run.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

As many as the frontend developer / programmer creates. At least one? I'm not sure where to find this information...lol! Please advise.

## How many instances of the server-side code are available at any given time?

As many as the backend developer / programmer creates. At least one? I'm not sure where to find this information...lol again! Please advise.

## How many instances of the databases connected to the server application are created?

There is one database that holds the specified data that is requested by the client and provided for by the server.
