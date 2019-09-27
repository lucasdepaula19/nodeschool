
var fs = require('fs');

(function(){
    var args = process.argv;
    var arq_texto = fs.readFileSync(args[2]);
    var arq_buffer = arq_texto.toString();
    var arq_array = arq_buffer.split('\n')

    console.log(arq_array.length -1);
})()
