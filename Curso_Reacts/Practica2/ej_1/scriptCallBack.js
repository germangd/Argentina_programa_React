function suma (a,b,callback){
    let c = a +b;
    callback(c);
}

suma(7,6,function imprimirResultado(c){
    console.log(c)
})