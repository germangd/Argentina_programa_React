function Calculadora(operando1,operando2){
    var operacion = document.getElementById("operacion");
    var operando1 = parseFloat(document.getElementById('operando1').value);
    var operando2 = parseFloat(document.getElementById('operando2').value);
    
switch(operacion.value){
    case "+":
        document.getElementById('resultado').value = operando1 + operando2;
        break;
    case "-":
        document.getElementById('resultado').value = operando1 - operando2;
        break;
    case "*":
        document.getElementById('resultado').value = operando1 * operando2;
        break;
    case "/":
        if(op2!=0){
        document.getElementById('resultado').value = operando1 / operando2;
    }else
        alert("No se puede dividir por Cero");
        break;
    default:
        alert("Debe ingresar una operacion admitida");
}
}