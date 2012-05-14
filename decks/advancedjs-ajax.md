# Advanced JS<br />Ajax

---
## Ajax
#### What is Ajax?

* Ajax stands for Asynchronous Javascript and XML
* It's not a new language just a set of standards to do something new with.
* It allows you to send and receive data from a web server without reloading.

---
## Ajax
#### What is Ajax?

### Ajax is based on these Internet Standards

* XMLHTTPRequest object - To exchange data asynchronously from the server.
* JavaScript/DOM - To display/interact with information.
* CSS - To style the data.
* XML - Often used to transport the data.

---
## Ajax
#### XHR

	// everything but < IE 7
	var ajax = new XMLHttpRequest();
		ajax.open("GET","some_url", true);
		ajax.send();
	
	// IE 5, 6
	var ajax = new ActiveXObject("Microsoft.XMLHTTP");
	
* XHR is supported by all modern web browsers (IE5-6 use ActiveXObject).
* Server process can sometimes be time consuming so sending an Async request will tell JavaScript to continue working and not wait for the request to return.
* New Ajax requests interact with a web server in a REST-full method.

---
## Ajax
#### Lifecycle of a request

* When a new ajax request is made it goes through 5-stages
	- 0: Request not initialized.
	- 1: Server connection established.
	- 2: Request received.
	- 3: Processing request.
	- 4: Request finished and response is ready.
* A built in event `onreadystatechange` fires when a state is changed.
* HTTP Status headers (200, 404, 500, etc) are returned as well.

---
## Ajax
#### Responses

* When the web server returns a response the XHR will pass it in two properties.
	- __ResponseText__: The plaint-text string of the response.
	- __ResponseXML__: An XML based response.

---
## Ajax
#### Responses

	var ajax = new XMLHttpRequest();
	ajax.open("GET","some_url", true);
	ajax.send();
	
	ajax.onreadystatechange = function() {
		if( ajax.readyState == 4 && ajax.status == 200 ) {
			document.getElementById("MyAjaxResp")
				.innerHTML = ajax.responseText;
		}
	}
---
## Ajax
#### Security Limitations

* Ajax has limitation to what data it can access.
* Same-domain-origin policy prevents scripts from one domain accessing resources from another.
	- This can be circumvented by modifying the web server to allow access, must own both domains.
* Alternatives like CORS and JSONP are also available for circumventing this issue.