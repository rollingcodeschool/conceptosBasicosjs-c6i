let cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: (objeto, deposito)=>{
        objeto.saldo += deposito; // c.saldo = deposito + c.saldo;
        console.log(objeto.saldo);
    },
    extraer:(objeto, retiro)=>{
        if(objeto.saldo >= retiro){
            objeto.saldo -= retiro;
            document.write(`<p>Se retiro $${retiro}</p>`);
        }else{
            document.write(`<p>Saldo insuficiente</p>`);
        }
    },
    informar:(objeto)=>{
        console.log(objeto)
        document.write(`<p>La cuenta de ${objeto.titular}, posee un saldo de $${objeto.saldo}</p>`)
    }
}

cuenta.informar(cuenta);
// console.log(this)

let deposito = parseFloat(prompt('Ingrese el monto deseado'));
cuenta.ingresar(cuenta, deposito);

let retiro = parseFloat(prompt('Ingrese el monto a extraer'));
cuenta.extraer(cuenta, retiro);

cuenta.informar(cuenta);