function createAjaxRequest(action, url) {
  var xmlHttpObject;  // Firefox, Safari, Opera 8+
  try { xmlHttpObject = new XMLHttpRequest();
  } catch (e) { // Internet Explorer Support
    try { xmlHttpObject = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {  xmlHttpObject = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) { alert("So Sad, Your browser does not support AJAX!");
        return false;
      }
    }
  }
  xmlHttpObject.onreadystatechange = function () {
    if (xmlHttpObject.readyState === 4) {
      if (xmlHttpObject.status === 200) {
        var contentType = xmlHttpObject.getResponseHeader("Content-Type");
        if (contentType === "text/xml")    return xmlHttpObject.responseXML;
        else if (contentType === "text/json") return eval(xmlHttpObject.responseText);
        else return xmlHttpObject.responseText;
      }
    }
  };
  xmlHttpObject.open(action, url, true);
  xmlHttpObject.send(null);
}
