class View{

	constructor(elemento){
		this._elemento = elemento;
	}

	template(){

		throw new Error('O método Template deve ser implementado!');
	}

	update(model){

		this._elemento.innerHTML = this.template(model);
	}
}