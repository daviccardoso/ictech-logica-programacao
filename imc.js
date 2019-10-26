const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question('Informe sua altura: ', altura => {
  reader.question('Informe seu peso: ', peso => {
    imc = peso / (altura * altura);

    console.log(`Seu IMC é: ${Math.round(imc)}.`);

    reader.close();
  });
});
