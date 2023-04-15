const e=JSON.parse('{"key":"v-71a94eb6","path":"/widgetsBasedAutomation.html","title":"基于控件的操作","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"auto([mode])","slug":"auto-mode","link":"#auto-mode","children":[]},{"level":2,"title":"auto.waitFor()","slug":"auto-waitfor","link":"#auto-waitfor","children":[]},{"level":2,"title":"auto.setMode(mode)","slug":"auto-setmode-mode","link":"#auto-setmode-mode","children":[]},{"level":2,"title":"click(text[, i])","slug":"click-text-i","link":"#click-text-i","children":[]},{"level":2,"title":"click(left, top, bottom, right)","slug":"click-left-top-bottom-right","link":"#click-left-top-bottom-right","children":[]},{"level":2,"title":"longClick(text[, i]))","slug":"longclick-text-i","link":"#longclick-text-i","children":[]},{"level":2,"title":"scrollUp([i])","slug":"scrollup-i","link":"#scrollup-i","children":[]},{"level":2,"title":"scrollDown([i])","slug":"scrolldown-i","link":"#scrolldown-i","children":[]},{"level":2,"title":"setText([i, ]text)","slug":"settext-i-text","link":"#settext-i-text","children":[]},{"level":2,"title":"input([i, ]text)","slug":"input-i-text","link":"#input-i-text","children":[]},{"level":2,"title":"selector()","slug":"selector","link":"#selector","children":[]},{"level":2,"title":"UiSelector.text(str)","slug":"uiselector-text-str","link":"#uiselector-text-str","children":[]},{"level":2,"title":"UiSelector.textContains(str)","slug":"uiselector-textcontains-str","link":"#uiselector-textcontains-str","children":[]},{"level":2,"title":"UiSelector.textStartsWith(prefix)","slug":"uiselector-textstartswith-prefix","link":"#uiselector-textstartswith-prefix","children":[]},{"level":2,"title":"UiSelector.textEndsWith(suffix)","slug":"uiselector-textendswith-suffix","link":"#uiselector-textendswith-suffix","children":[]},{"level":2,"title":"UiSelector.textMatches(reg)","slug":"uiselector-textmatches-reg","link":"#uiselector-textmatches-reg","children":[]},{"level":2,"title":"UiSelector.desc(str)","slug":"uiselector-desc-str","link":"#uiselector-desc-str","children":[]},{"level":2,"title":"UiSelector.descContains(str)","slug":"uiselector-desccontains-str","link":"#uiselector-desccontains-str","children":[]},{"level":2,"title":"UiSelector.descStartsWith(prefix)","slug":"uiselector-descstartswith-prefix","link":"#uiselector-descstartswith-prefix","children":[]},{"level":2,"title":"UiSelector.descEndsWith(suffix)","slug":"uiselector-descendswith-suffix","link":"#uiselector-descendswith-suffix","children":[]},{"level":2,"title":"UiSelector.descMatches(reg)","slug":"uiselector-descmatches-reg","link":"#uiselector-descmatches-reg","children":[]},{"level":2,"title":"UiSelector.id(resId)","slug":"uiselector-id-resid","link":"#uiselector-id-resid","children":[]},{"level":2,"title":"UiSelector.idContains(str)","slug":"uiselector-idcontains-str","link":"#uiselector-idcontains-str","children":[]},{"level":2,"title":"UiSelector.idStartsWith(prefix)","slug":"uiselector-idstartswith-prefix","link":"#uiselector-idstartswith-prefix","children":[]},{"level":2,"title":"UiSelector.idEndsWith(suffix)","slug":"uiselector-idendswith-suffix","link":"#uiselector-idendswith-suffix","children":[]},{"level":2,"title":"UiSelector.idMatches(reg)","slug":"uiselector-idmatches-reg","link":"#uiselector-idmatches-reg","children":[]},{"level":2,"title":"UiSelector.className(str)","slug":"uiselector-classname-str","link":"#uiselector-classname-str","children":[]},{"level":2,"title":"UiSelector.classNameContains(str)","slug":"uiselector-classnamecontains-str","link":"#uiselector-classnamecontains-str","children":[]},{"level":2,"title":"UiSelector.classNameStartsWith(prefix)","slug":"uiselector-classnamestartswith-prefix","link":"#uiselector-classnamestartswith-prefix","children":[]},{"level":2,"title":"UiSelector.classNameEndsWith(suffix)","slug":"uiselector-classnameendswith-suffix","link":"#uiselector-classnameendswith-suffix","children":[]},{"level":2,"title":"UiSelector.classNameMatches(reg)","slug":"uiselector-classnamematches-reg","link":"#uiselector-classnamematches-reg","children":[]},{"level":2,"title":"UiSelector.packageName(str)","slug":"uiselector-packagename-str","link":"#uiselector-packagename-str","children":[]},{"level":2,"title":"UiSelector.packageNameContains(str)","slug":"uiselector-packagenamecontains-str","link":"#uiselector-packagenamecontains-str","children":[]},{"level":2,"title":"UiSelector.packageNameStartsWith(prefix)","slug":"uiselector-packagenamestartswith-prefix","link":"#uiselector-packagenamestartswith-prefix","children":[]},{"level":2,"title":"UiSelector.packageNameEndsWith(suffix)","slug":"uiselector-packagenameendswith-suffix","link":"#uiselector-packagenameendswith-suffix","children":[]},{"level":2,"title":"UiSelector.packageNameMatches(reg)","slug":"uiselector-packagenamematches-reg","link":"#uiselector-packagenamematches-reg","children":[]},{"level":2,"title":"UiSelector.bounds(left, top, right, bottom)","slug":"uiselector-bounds-left-top-right-bottom","link":"#uiselector-bounds-left-top-right-bottom","children":[]},{"level":2,"title":"UiSelector.boundsInside(left, top, right, bottom)","slug":"uiselector-boundsinside-left-top-right-bottom","link":"#uiselector-boundsinside-left-top-right-bottom","children":[]},{"level":2,"title":"UiSelector.boundsContains(left, top, right, bottom)","slug":"uiselector-boundscontains-left-top-right-bottom","link":"#uiselector-boundscontains-left-top-right-bottom","children":[]},{"level":2,"title":"UiSelector.drawingOrder(order)","slug":"uiselector-drawingorder-order","link":"#uiselector-drawingorder-order","children":[]},{"level":2,"title":"UiSelector.clickable([b = true])","slug":"uiselector-clickable-b-true","link":"#uiselector-clickable-b-true","children":[]},{"level":2,"title":"UiSelector.longClickable([b = true])","slug":"uiselector-longclickable-b-true","link":"#uiselector-longclickable-b-true","children":[]},{"level":2,"title":"UiSelector.checkable([b = true])","slug":"uiselector-checkable-b-true","link":"#uiselector-checkable-b-true","children":[]},{"level":2,"title":"UiSelector.selected([b = true])","slug":"uiselector-selected-b-true","link":"#uiselector-selected-b-true","children":[]},{"level":2,"title":"UiSelector.enabled([b = true])","slug":"uiselector-enabled-b-true","link":"#uiselector-enabled-b-true","children":[]},{"level":2,"title":"UiSelector.scrollable([b = true])","slug":"uiselector-scrollable-b-true","link":"#uiselector-scrollable-b-true","children":[]},{"level":2,"title":"UiSelector.editable([b = true])","slug":"uiselector-editable-b-true","link":"#uiselector-editable-b-true","children":[]},{"level":2,"title":"UiSelector.multiLine([b = true])","slug":"uiselector-multiline-b-true","link":"#uiselector-multiline-b-true","children":[]},{"level":2,"title":"UiSelector.findOne()","slug":"uiselector-findone","link":"#uiselector-findone","children":[]},{"level":2,"title":"UiSelector.findOne(timeout)","slug":"uiselector-findone-timeout","link":"#uiselector-findone-timeout","children":[]},{"level":2,"title":"UiSelector.findOnce()","slug":"uiselector-findonce","link":"#uiselector-findonce","children":[]},{"level":2,"title":"UiSelector.findOnce(i)","slug":"uiselector-findonce-i","link":"#uiselector-findonce-i","children":[]},{"level":2,"title":"UiSelector.find()","slug":"uiselector-find","link":"#uiselector-find","children":[]},{"level":2,"title":"UiSelector.untilFind()","slug":"uiselector-untilfind","link":"#uiselector-untilfind","children":[]},{"level":2,"title":"UiSelector.exists()","slug":"uiselector-exists","link":"#uiselector-exists","children":[]},{"level":2,"title":"UiSelector.waitFor()","slug":"uiselector-waitfor","link":"#uiselector-waitfor","children":[]},{"level":2,"title":"UiSelector.filter(f)","slug":"uiselector-filter-f","link":"#uiselector-filter-f","children":[]},{"level":2,"title":"UiObject.click()","slug":"uiobject-click","link":"#uiobject-click","children":[]},{"level":2,"title":"UiObject.longClick()","slug":"uiobject-longclick","link":"#uiobject-longclick","children":[]},{"level":2,"title":"UiObject.setText(text)","slug":"uiobject-settext-text","link":"#uiobject-settext-text","children":[]},{"level":2,"title":"UiObject.copy()","slug":"uiobject-copy","link":"#uiobject-copy","children":[]},{"level":2,"title":"UiObject.cut()","slug":"uiobject-cut","link":"#uiobject-cut","children":[]},{"level":2,"title":"UiObject.paste()","slug":"uiobject-paste","link":"#uiobject-paste","children":[]},{"level":2,"title":"UiObject.setSelection(start, end)","slug":"uiobject-setselection-start-end","link":"#uiobject-setselection-start-end","children":[]},{"level":2,"title":"UiObject.scrollForward()","slug":"uiobject-scrollforward","link":"#uiobject-scrollforward","children":[]},{"level":2,"title":"UiObject.scrollBackward()","slug":"uiobject-scrollbackward","link":"#uiobject-scrollbackward","children":[]},{"level":2,"title":"UiObject.select()","slug":"uiobject-select","link":"#uiobject-select","children":[]},{"level":2,"title":"UiObject.collapse()","slug":"uiobject-collapse","link":"#uiobject-collapse","children":[]},{"level":2,"title":"UiObject.expand()","slug":"uiobject-expand","link":"#uiobject-expand","children":[]},{"level":2,"title":"UiObject.show()","slug":"uiobject-show","link":"#uiobject-show","children":[]},{"level":2,"title":"UiObject.scrollUp()","slug":"uiobject-scrollup","link":"#uiobject-scrollup","children":[]},{"level":2,"title":"UiObject.scrollDown()","slug":"uiobject-scrolldown","link":"#uiobject-scrolldown","children":[]},{"level":2,"title":"UiObject.scrollLeft()","slug":"uiobject-scrollleft","link":"#uiobject-scrollleft","children":[]},{"level":2,"title":"UiObject.scrollRight()","slug":"uiobject-scrollright","link":"#uiobject-scrollright","children":[]},{"level":2,"title":"children()","slug":"children","link":"#children","children":[]},{"level":2,"title":"childCount()","slug":"childcount","link":"#childcount","children":[]},{"level":2,"title":"child(i)","slug":"child-i","link":"#child-i","children":[]},{"level":2,"title":"parent()","slug":"parent","link":"#parent","children":[]},{"level":2,"title":"bounds()","slug":"bounds","link":"#bounds","children":[]},{"level":2,"title":"boundsInParent()","slug":"boundsinparent","link":"#boundsinparent","children":[]},{"level":2,"title":"drawingOrder()","slug":"drawingorder","link":"#drawingorder","children":[]},{"level":2,"title":"id()","slug":"id","link":"#id","children":[]},{"level":2,"title":"text()","slug":"text","link":"#text","children":[]},{"level":2,"title":"findByText(str)","slug":"findbytext-str","link":"#findbytext-str","children":[]},{"level":2,"title":"findOne(selector)","slug":"findone-selector","link":"#findone-selector","children":[]},{"level":2,"title":"find(selector)","slug":"find-selector","link":"#find-selector","children":[]},{"level":2,"title":"UiCollection.size()","slug":"uicollection-size","link":"#uicollection-size","children":[]},{"level":2,"title":"UiCollection.get(i)","slug":"uicollection-get-i","link":"#uicollection-get-i","children":[]},{"level":2,"title":"UiCollection.each(func)","slug":"uicollection-each-func","link":"#uicollection-each-func","children":[]},{"level":2,"title":"empty()","slug":"empty","link":"#empty","children":[]},{"level":2,"title":"nonEmpty()","slug":"nonempty","link":"#nonempty","children":[]},{"level":2,"title":"UiCollection.find(selector)","slug":"uicollection-find-selector","link":"#uicollection-find-selector","children":[]},{"level":2,"title":"UiCollection.findOne(selector)","slug":"uicollection-findone-selector","link":"#uicollection-findone-selector","children":[]},{"level":2,"title":"Rect.left","slug":"rect-left","link":"#rect-left","children":[]},{"level":2,"title":"Rect.right","slug":"rect-right","link":"#rect-right","children":[]},{"level":2,"title":"Rect.top","slug":"rect-top","link":"#rect-top","children":[]},{"level":2,"title":"Rect.bottom","slug":"rect-bottom","link":"#rect-bottom","children":[]},{"level":2,"title":"Rect.centerX()","slug":"rect-centerx","link":"#rect-centerx","children":[]},{"level":2,"title":"Rect.centerY()","slug":"rect-centery","link":"#rect-centery","children":[]},{"level":2,"title":"Rect.width()","slug":"rect-width","link":"#rect-width","children":[]},{"level":2,"title":"Rect.height()","slug":"rect-height","link":"#rect-height","children":[]},{"level":2,"title":"Rect.contains(r)","slug":"rect-contains-r","link":"#rect-contains-r","children":[]},{"level":2,"title":"Rect.intersect(r)","slug":"rect-intersect-r","link":"#rect-intersect-r","children":[]}],"git":{},"filePathRelative":"widgetsBasedAutomation.md"}');export{e as data};
