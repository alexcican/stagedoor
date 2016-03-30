// detect if iPhone/iPad replace iTunes link with direct App Store link
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
  window.location = 'stagedoor://venue/13?_hk_cid=56eacad62ea6245c7b00b986';
  setTimeout(function() {
    window.location = "http://bit.ly/vnstgdr";
  }, 666);
}


// hide show sharing link
document.getElementById('toggle-button').addEventListener('click', function () {
  toggle(document.querySelectorAll('.sharing-container'));
});

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