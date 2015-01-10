// document.documentElement.style.border = '1px solid red'
function docWriteOverride(content) {
  if (content.indexOf("<script") === -1) {
    document.write(content)
  } else {
    console.log('skipping document.write() of: ' + content);
  }
}
// unsafeWindow.document.write = docWriteOverride
exportFunction(docWriteOverride, unsafeWindow.document, {defineAs: "write"});
