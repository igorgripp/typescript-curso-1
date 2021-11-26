export function logarTempoDeExecucao(emSegundos: boolean = false){
  return function(
    target: any,
    porpertyKey: string,
    description: PropertyDescriptor
  ){
    const metodoOriginal = description.value;
    description.value = function(...args: Array<any>){
      let divisor = 1;
      let unidade = 'milisegundos';
      if(emSegundos){
        divisor = 1000;
        unidade = 'segundos'
      }
      const t1 = performance.now();

      //Chamar metodo original
      const retorno = metodoOriginal.apply(this, args);

      const t2 = performance.now();
      console.log(`${porpertyKey},tempo de execução foi de ${(t2-t1)/divisor} ${unidade}.`);
      return retorno;

    }
    return description;
  }
}