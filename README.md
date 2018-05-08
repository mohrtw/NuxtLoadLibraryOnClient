# NuxtLoadLibraryOnClient

## Problem:
Our imported library is not loading on the client.

## How the app works:
* pages/index.vue import SO from "../static/someObjects.js";
* asyncData creates an SO.AnObject
* components/util/objectLoader receives the SO.AnObject as prop 'obj'
* objectLoader's objectProcessor checks what instanceOf 'obj' is, then returns a property of that object
* objectLoader displays the data received from index.vue


## What we've tried:
* placing	the library	in static, assets, and plugins
* loading	the library in the store
* loading	data with fetch	instead	of asyncData

## How it should work:
* objectLoader's objectProcessor checks whether the	data passed to it is an	instanceOf AnObject or AnotherObject,
then returns either the	name or	the title.
* The browser should then	display	"Object data: Mohr" instead of "Object data: didn't work"

Placing	a debugger in objectProcessor shows that the correct data loads	on the server,
but the	imported SO and	OO objects are undefined, so it	fails the instanceOf checks and	returns	"didn't	work"
