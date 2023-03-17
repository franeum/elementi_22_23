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
	process(previous);
}

function start(v)
{ 
	process(v);
	outlet(0, v);
}

function msg_int(v)
{
	previous = theDict.get(v);
	outlet(0, v);
}

function process(v) {
	previous = theDict.get(v);

	if (Array.isArray(previous)) {
		var index = get_random_value(previous.length);
		previous = previous[index];
	}	
}

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	post("received message " + a + "\n");
	myval = a;
	bang();
}

function gettable()
{
	var k = theDict.getkeys(); 
	
	post("###\t");
	post("MARKOV CHAIN TABLE\t");
	post("###\n");
	k.forEach(function(x) { 
		post("###\t");
		post(x + ':\t');
		post(theDict.get(x));
		post('\n');
	});
}

function get_random_value(index)
{
	return Math.floor(Math.random() * index);
}