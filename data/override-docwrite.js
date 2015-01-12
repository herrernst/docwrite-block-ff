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
exportFunction(docWriteOverride, unsafeWindow.document, {defineAs: "write"});
