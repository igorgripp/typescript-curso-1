import { View } from "./view.js";
export class MensagemView extends View {
    template(model, tipo_mensagem) {
        return `
      <div class="alert alert-${tipo_mensagem} alert-dismissible">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        ${model}
      </div>
    `;
    }
    update(model, tipo_mensagem) {
        const template = this.template(model, tipo_mensagem);
        this.elemento.innerHTML = template;
    }
}
