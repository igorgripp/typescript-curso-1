import { domInjector } from "../decorators/dom-injector.js";
import { DiasDaSemana } from "../enums/dias-da-semanas.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{

  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacaoesView('#negociacoesView');
  private mensagem = new MensagemView('#mensagemView');
  private negociacoesService = new NegociacoesService();

  constructor(){
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    if(!this.ehDiaUtil(negociacao.data)){
      this.mensagem.update("Apenas negociações em dias úteis são aceitas.", "warning");
      return;
    }

    this.negociacoes.adiciona(negociacao); 
    this.negociacoesView.update(this.negociacoes);
    this.mensagem.update("Negociação salva com sucesso!", "info");
    
    this.limparFormulario();

  }

  public importarDados(): void{
      this.negociacoesService.obterNegociacoesDoDia()
      .then(negociacoesDeHoje =>{
        for(let negociacao of negociacoesDeHoje){
          this.negociacoes.adiciona(negociacao);
        }
        this.negociacoesView.update(this.negociacoes);
      });
  }

  private ehDiaUtil(data: Date): boolean{
    return  data.getDay() > DiasDaSemana.DOMINGO && 
            data.getDay() < DiasDaSemana.SABADO
  }

  criaNegociacao(): Negociacao {

    const exp = /-/g;

    const date = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(
      date,
      quantidade,
      valor,
    );
  }

  limparFormulario(): void{
    this.inputData.value= '';
    this.inputQuantidade.value= '';
    this.inputValor.value= '';
    this.inputData.focus();
  }


}