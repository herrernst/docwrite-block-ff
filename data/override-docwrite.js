// document.documentElement.style.border = '1px solid red'
var scriptSrcRegex = /<script\b[^<>]*\bsrc=/;
function docWriteOverride(content) {
  if (scriptSrcRegex.test(content)) {
    console.log('skipping document.write() of: ' + content);
  } else {
    document.write(content)
  }
}
// unsafeWindow.document.write = docWriteOverride
//don't do it in quirks mode, should improve compatibility for very old pages
if (document.compatMode !== "BackCompat") {
  exportFunction(docWriteOverride, unsafeWindow.document, {defineAs: "write"});
}