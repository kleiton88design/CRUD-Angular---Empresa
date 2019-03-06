import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class AppService {
	contatosUrl = 'http://localhost:8280/empresa';
	constructor(private http: HttpClient) { }

	listar() {
		return this.http.get(this.contatosUrl);
	}
	criar(contato: any) {
		return this.http.post(this.contatosUrl, contato);
	}
	deletar(id_empresa) {
		return this.http.delete(this.contatosUrl + '(' + id_empresa + ')');
	}
	editar(contato: any) {
		return this.http.put(this.contatosUrl+ '(' + contato.id_empresa + ')', contato);
	}

	selecionadoPorId(id_empresa) {
		return this.http.get(this.contatosUrl + '(' + id_empresa + ')');
	}

}