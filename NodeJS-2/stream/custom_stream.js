let stream = require('stream');
let util = require('util');


function ReadStream() {
	stream.Readable.call(this);
}

util.inherits(ReadStream, stream.Readable);

ReadStream.prototype._read = function () {
	this.push('I ');
	this.push('Love ');
	this.push('Imooc\n');
	this.push(null);
};




function WriteStream() {
	stream.Writable.call(this);
	
	this._cached = new Buffer('')
}

util.inherits(WriteStream, stream.Writable);

WriteStream.prototype._write = function (chunk, encoding, callback) {
	console.log(chunk.toString());
	
	callback();
};



function TransformStream() {
	stream.Transform.call(this);
}

util.inherits(TransformStream, stream.Transform);

TransformStream.prototype._tranform =  function (chunk, encoding, callback) {
	this.push(chunk);
	
	callback();
};
TransformStream.prototype._flish =  function (callback) {
	this.push('Oh Yeah!');
	
	callback();
};


let rs = new ReadStream();
let ws = new WriteStream();
let ts = new TransformStream();

rs.pipe(ts).pipe(ws);