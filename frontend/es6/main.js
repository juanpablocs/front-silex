/**
 * @author Juan Pablo <juanpablocs21@gmail.com
 * @date 16/09/16.
 */

import _ from 'underscore';
import Router from 'jp-router';

const app = new Router({location:window.location.pathname});

app.map('/', ()=>{
	let hello = ()=> "Hello World";
	console.log(hello());
	console.log(_.map([1,2,3], n => n*3));
});

app.map('/user/:username', (username)=>{
	console.log("Router js " + username);
});