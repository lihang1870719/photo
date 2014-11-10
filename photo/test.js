var ejs =require('ejs');
var template='<%=: movies | first%>';
var context={'movies':[
	'Lihang',
	'hello:psdfaf',
	'yes'
]};

console.log(ejs.render(template,context));