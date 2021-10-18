const obj = {};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (( max + 1 ) - min)) + min;
};

export const calculo = (cant) => {
    for (let index = 0; index < Number(cant); index++) {
        const x = getRandomInt(1, 1000);
        if(Object.keys(obj).includes(String(x))){
            obj[x] += 1;
        }else{
            obj[x] = 1;
        }
    };    
    return obj;
}

process.on('message', (msg) => {
    console.log('recibiendo..:', msg);
    if (msg[0] == 'start') {
      console.log('Start cálculo');
      const obj = calculo(Number(msg[1]));
  
      if (process && process.send) {
        process.send(obj);
      }
    }
});