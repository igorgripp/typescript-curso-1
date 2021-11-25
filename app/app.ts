import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacaoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if(form){
  form.addEventListener('submit', event =>{
    event.preventDefault();
    controller.adiciona();
  });
}else{
  throw Error('Não foi possível inicializar a aplicação');
}

// const negociacoesView = new NegociacaoesView();
// const template = negociacoesView.template();
// console.log(template);