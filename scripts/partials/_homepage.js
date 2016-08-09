// get link from HTML
// var appstoreLink = document.getElementsByClassName("appstore-link");
// var hokoURL;
// if(appstoreLink.length >= 2)
//   hokoURL = appstoreLink[0].href = appstoreLink[1].href;

// detect if iPhone/iPad replace iTunes link with direct App Store link
// if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
//   window.location = hokoURL;
//   setTimeout(function() {
//     window.location = "http://bit.ly/vnstgdr";
//   }, 666);
// }


// hide show sharing link
var el = document.getElementById('toggle-button');
if (el){
  el.addEventListener('click', function () {
    toggle(document.querySelectorAll('.sharing-container'));
  });
}

function toggle (elements, specifiedDisplay) {
  var element, index;
  elements = elements.length ? elements : [elements];
  for (index = 0; index < elements.length; index++) {
    element = elements[index];
    if (isElementHidden(element)) {
      element.style.display = '';
      // If the element is still hidden after removing the inline display
      if (isElementHidden(element)) {
        element.style.display = specifiedDisplay || 'block';
        window.scrollBy(0,100);
      }
    } else {
      element.style.display = 'none';
    }
  }
  function isElementHidden (element) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
  }
}