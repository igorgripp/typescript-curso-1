import { NegociacaoController } from "./controllers/negociacoa-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
// const negociacoesView = new NegociacaoesView();
// const template = negociacoesView.template();
// console.log(template);
