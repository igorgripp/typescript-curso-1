import { View } from "./view.js";

export class MensagemView extends View<string>{

  protected template(model: string, tipo_mensagem?: string): string{
    return `
      <div class="alert alert-${tipo_mensagem} alert-dismissible">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        ${model}
      </div>
    `
  }

  update(model: string, tipo_mensagem?: string): void{
    const template = this.template(model, tipo_mensagem);
    this.elemento.innerHTML = template;
  }

}