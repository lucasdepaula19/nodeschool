
(function(){
    var args = process.argv
    var soma = 0

    for(i = 2; i < args.length; i++){
        
        soma += Number(args[i])
    }
    console.log(soma)
})()



