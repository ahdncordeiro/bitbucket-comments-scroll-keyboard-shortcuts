var shouldAddEventListener;
var comments;
var currentCommentIndex;
// define a handler
function doc_keyUp(e) {
  // this would test if keyCode 220 (\) was pressed
  if (e.keyCode == 220) { // Test if keyCode 220 (\) was pressed
    console.log("Keyboard for next comment triggered.");
    comments[currentCommentIndex].scrollIntoView({behavior: 'smooth'});
    currentCommentIndex = currentCommentIndex == (comments.length - 1) ? 0 : currentCommentIndex + 1;
  }
}

// register the handler 
if ((shouldAddEventListener == null ? true : shouldAddEventListener)) {
  shouldAddEventListener = false;
  console.log("Adding Bitbucket [Go to next comment] keyboard shortcuts event listener...")
  comments = document.querySelectorAll("[class='comment-thread-container']")
  currentCommentIndex = 0;
  document.addEventListener('keyup', doc_keyUp, false);
}
