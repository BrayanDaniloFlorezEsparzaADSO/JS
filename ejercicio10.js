addEventListener(`DOMContentLoaded`,()=>{

    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: + /*
    // from math import sqrt
    let A=Number(prompt(`dijite el valor de A:`))
    let B=Number(prompt(`dijite el valor de B:`))
    let C=Number(prompt(`dijite el valor de C:`))
    let X=Number (78)
    // #PROCESOS U OPERACIONES
    let res=A*X*2+ B*X+ C
    
    if (res<0)
      console.log(`raiz imaginaria`);
    
    else;
        let ps=(A+sqrt(A*X*2+ B*X+ C))
        let ng=(A-sqrt(A*X*2+ B*X+ C))
    
    // #salida o entrada de resultado
    console.log(`algoritmo para obtener raices reales${res}`);
    console.log(`el valor de raiz positiva${Math.pqrs}`);
    console.log(`el valor de raiz negativa${ng}`);
})