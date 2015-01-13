#Firefox extension to prevent document.writing script tags with src
```document.write``` has long been considered bad web development practice (search for it in your favourite search engine). At least
* it blocks rendering, which is especially bad if you use ```document.write``` to add new ```<script>``` tags with an external source
* if called on an already loaded document, it re-opens the document, effectively making it empty (white page)

[HTML5 spec says](http://www.w3.org/html/wg/drafts/html/master/webappapis.html#dynamic-markup-insertion) says:
> [...] use of this method is strongly discouraged.

Still, it use used a lot by online advertising because they can get their shit together.
After reading that [most ad-blockers use more resources](http://www.extremetech.com/computing/182428-ironic-iframes-adblock-plus-is-probably-the-reason-firefox-and-chrome-are-such-memory-hogs) (memory, CPU) than they save I had the idea of just blocking calls of ```document.write``` which would write new script tags. So this is basically an almost one-line ad-blocker.

This might break your web and is therefore not meant for everyday use, least of all on your grandparents computer. I just created it out of curiusity to see what would happen and which sites might break because they still use ```document.write```. It doesn't hide borders around ads, ad regions might just remain white, e.g. Also, it doesn't 'fail' for some kinds of ads like Google Ads, which seem to use rocket science technology (i.e. not using ```document.write```).

This is also meant as a hint to the advertising industry to upgrade their tech and arrive in the current millennium.

Built with [jetpack](https://developer.mozilla.org/en-US/Add-ons/SDK), so ```source``` it, then you can ```cfx run``` and ```cfx xpi```.
