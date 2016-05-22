'use strict'

const PostHTML = require('posthtml');
const arrayBootstrap = require('./classes.json');

const starter = 'js-';
const html = 
`<nav class="navbar navbar-inverse navbar-fixed-top you are cool">
    <div class="container">
    <div class="navbar-header have js-a js-nice">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only day">Toggle navigation</span>
        <span class="icon-bar thank js-you"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Project name</a>
    </div>
</nav>`;


const removeClass = tree => tree
	.match({ attrs: {class: true} }, node => 
	{
        let starterData = [];
		let arrayClasses = node.attrs.class
            .split(' ')
            .filter(item => {
                if (item.indexOf(starter)==0) starterData.push(item.substr(starter.length));
                return arrayBootstrap.indexOf(item) < 0 && item.indexOf(starter) !== 0;
            })
            .join(' ');
            
        node.attrs['class'] = (arrayClasses.length == 0) ? false : arrayClasses;
        node.attrs['data-js'] = (starterData.length == 0) ? false : starterData.join(' ');
        return node;
	});
    
    
PostHTML([removeClass])
	.process(html)
	.then(result => 
	{
		console.log(result.html)
	});