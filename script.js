function customError(array, number) {
    if(!array || !number) throw new ReferenceError();
    
    if(typeof(array) !== 'object') throw new TypeError();

    if(typeof(number) !== 'number') throw new TypeError();

    if(array.length !== number) throw new RangeError();
}

try {
    customError([''], 2);
} catch(e) {
    if(e instanceof ReferenceError) console.log("Parametros não enviados");
        
    if(e instanceof TypeError) console.log("Parâmetros enviados são inválidos")

    if(e instanceof RangeError) console.log("Parâmetro número não se refere ao tamanho do array");
}