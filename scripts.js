// cotação de moedas
console.log("Cotação do dia: ");

const USD = 5.25;
const EUR = 5.90;
const GBP = 6.80;


// obtendo elementos

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input Amount para receber apenas numeros
amount.addEventListener("input", () => {
const HasCharactersRegex = /\D+/g;
amount.value = amount.value.replace(HasCharactersRegex, "");
   
});
 // Capturando o evento do formulario
form.onsubmit = (event) => {
    event.preventDefault();
    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$');
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, '£');
            break;

}}


// Função para converter a moeda

function convertCurrency(amount, price, symbol) {
try { 
// atualizando a moeda e exibindo 
  description.textContent = `${symbol} 1 =  ${formatCurrencyBRL(price)} `
    // exibe a classe do footer
    footer.classList.add("show-result");
    // calculando o total
    let total = String(amount * price).replace(".", ",");
    // exibindo o resultado formatado Total
    result.textContent = `${total} Reais` 

} catch (error) {
    console.log(error)
    // remove a classe do footer
    footer.classList.remove("show-result");
    alert("Erro ao converter a moeda: ");}

}

// Função para formatar o valor em BRL
function formatCurrencyBRL(value) {

    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


}
