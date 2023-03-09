var rules = [];
var start;
var previous;

if (jsarguments.length>1)
	//myval = jsarguments[1];
	var theDict = new Dict(jsarguments[1]); 

	

function init(v)
{
	start = v;
}

function list()
{
	var a = arrayfromargs(arguments);
	if (a.length > 2) {
		error("Malformed list");
	} else {
		rules.push(a);
		bang();
	}
}

function bang()
{
	outlet(0, previous);
	previous = theDict.get(previous);
	if (Array.isArray(previous)) {
		var index = get_random_value(previous.length);
		previous = previous[index];
	}
}

function msg_int(v)
{
	previous = theDict.get(v);
	outlet(0, v);
}

function start(v)
{ 
	previous = theDict.get(v);
	
	if (Array.isArray(previous)) {
		var index = get_random_value(previous.length);
		previous = previous[index];
	}
	
	outlet(0, v);
}

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	post("received message " + a + "\n");
	myval = a;
	bang();
}

function getDict()
{
	var k = theDict.getkeys(); 
	
	k.forEach(function(x) { 
		post(x);
	});
}

function get_random_value(index)
{
	return Math.floor(Math.random() * index);
}