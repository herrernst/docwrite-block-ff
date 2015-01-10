// document.documentElement.style.border = '1px solid red'
function docWriteOverride(content) {
  console.log('document.write: ' + content);
}
// unsafeWindow.document.write = docWriteOverride
exportFunction(docWriteOverride, unsafeWindow.document, {defineAs: "write"});
