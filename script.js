const page1 = document.querySelector('.container');
const shadow = document.querySelector('.shadow');
const page2 = document.querySelector('.imc');
const inptPeso = document.querySelector('.peso');
const inptAltura = document.querySelector('.altura');
const btnCalcular = document.querySelector('.IMCcalcular');
const btnClose = document.querySelector('.p2close');
const imcResult = document.querySelector('.text-p');
const alerta = document.querySelector('.alert');

btnCalcular.addEventListener('click', handleClick);
btnClose.addEventListener('click', handleResetClick);

function isValidNumber(valor) {
  return !isNaN(Number(valor)) && isFinite(valor);
}
function handleClick(event) {
  var peso = inptPeso.value;
  var altura = inptAltura.value;

  if (isValidNumber(peso) && isValidNumber(altura)) {
    peso = Number(peso);
    altura = Number(altura);
    var bmi = peso / (altura * altura);
    bmi = bmi * 10000;
    imcResult.innerText = `Seu IMC é de ${bmi.toFixed(2)}`;
    page2.classList.toggle('hide');
    shadow.classList.toggle('hide');
  } else {
    alerta.classList.toggle('hide');
    setTimeout(() => {
      alerta.classList.toggle('hide');
    }, 4000);
  }
}
function handleResetClick() {
  page2.classList.toggle('hide');
  shadow.classList.toggle('hide');
  inptPeso.value = '';
  inptAltura.value = '';
}