// split URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// detect if iPhone/iPad/iPod
var notiOS = true;
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
  notiOS = false;
}



// if on iOS device do redirect
if (!notiOS) {
  // get either "venue" or "perf" ID from URL
  var venueID = getParameterByName('venue');
  var companyID = getParameterByName('comp');
  var performanceID = getParameterByName('perf');
  var listID = getParameterByName('l');
  if (listID == null) listID = getParameterByName('list');
  var redirectURL;

  // if venue ID is not empty, store the ID
  if (venueID !== null)
    redirectURL = "testdoor://venue_id=" + venueID;
  // if company ID is not empty, store the ID
  if (companyID !== null)
    redirectURL = "testdoor://theatre_company_id=" + companyID;
  // if performance ID is not empty, store the ID
  if (performanceID !== null)
    redirectURL = "testdoor://performance_id=" + performanceID;
  // if list ID is not empty, store the ID
  if (listID !== null)
    redirectURL = "testdoor://list_id=" + listID;


  // replace link URLs
  var iconLink = document.getElementById("inappicon-link");
  var bodyLink = document.getElementById("inappbody-link");
  iconLink.href = redirectURL;
  bodyLink.href = redirectURL;


  // redirect user (show iOS alert) and if empty redirect, send to homepage
  if (redirectURL !== undefined) {
    window.location = redirectURL;
  } else {
    window.location = 'http://stagedoorapp.com';
  }
} else {
  // if on desktop, android, etc show message that only supports mobile iOS
  var page = window.location.href.match(/[^/]+\?/g);
  if (page == "open?") {
    var textContainer = document.createElement("p"),
        text = document.createTextNode("Please open this link on your iOS device (iPhone, iPad, iPod).");

    textContainer.appendChild(text);
    textContainer.className = "alert  alert--yellow";
    document.getElementsByTagName('body')[0].appendChild(textContainer);
  }
}