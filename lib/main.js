var {Cu, Ci, Cc} = require('chrome');
Cu.import('resource://gre/modules/devtools/Console.jsm');

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("override-docwrite.js"),
  contentScriptWhen: "start"
});
