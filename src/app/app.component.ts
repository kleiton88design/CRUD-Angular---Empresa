import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	contatos: any;
	contato: any;
	idContato: any;
 
	constructor(private service: AppService) {}

	ngOnInit() {
		this.contato = {};
		this.service.listar()
		.subscribe(resposta => {
			this.contatos = (<HTMLInputElement>resposta).value;
		});
	}

	deletar(id_empresa){
		this.service.deletar(id_empresa)
		.subscribe(resposta => {
			this.contatos = resposta;
			window.location.reload();
		});
	}

	// Método criar e alterar
	criar(frm: FormGroup) {
		if(this.contato.id_empresa){

			/* Isso é o ckeckbox ativa, ele só retorna true e false, a tabela só recebe valor int,
			 entao coloquei a gravação  de true como 1 e false como 0*/
			if(this.contato.ativa == true) {
				this.contato.ativa = 1;
			} else {
				this.contato.ativa = 0;
			}

			/* O campo da tabela só recebe int, o value do campo esta como numeral, mas esta enviando como
			 string, então organizei para receber do campo esse número considerado string e enviar para a
			  tabela como int*/
			if(this.contato.tipo_empresa_fk == 1){
				this.contato.tipo_empresa_fk = 1;
			} else if(this.contato.tipo_empresa_fk == 2) {
				this.contato.tipo_empresa_fk = 2;
			}else{
				this.contato.tipo_empresa_fk = 3;
			}

			/* O campo da tabela só recebe int, o value do campo esta como numeral, mas esta enviando como
			 string, então organizei para receber do campo esse número considerado string e enviar para a
			  tabela como int*/
			if(this.contato.grupo_economico_fk == 3){
				this.contato.grupo_economico_fk = 3;
			}else if(this.contato.grupo_economico_fk == 4) {
				this.contato.grupo_economico_fk = 4;
			} else if(this.contato.grupo_economico_fk == 5) {
				this.contato.grupo_economico_fk = 5;
			} else {
				this.contato.grupo_economico_fk = 6;
			}

			// Método alterar
			this.service.editar(this.contato)
			.subscribe(resposta => {
				this.contatos.push = resposta;
				frm.reset();
				window.location.reload();
			});

		}else{
			// Esse valor esta fixo para sempre salvar esse valor na tabela
			this.contato.cnseg=0;

			/* Isso é o ckeckbox ativa, ele só retorna true e false, a tabela só recebe valor int,
			 entao coloquei a gravação  de true como 1 e false como 0*/
			if(this.contato.ativa == true) {
				this.contato.ativa = 1;
			} else {
				this.contato.ativa = 0;
			}

			/* O campo da tabela só recebe int, o value do campo esta como numeral, mas esta enviando como
			 string, então organizei para receber do campo esse número considerado string e enviar para a
			  tabela como int*/
			if(this.contato.tipo_empresa_fk == 1){
				this.contato.tipo_empresa_fk = 1;
			} else if(this.contato.tipo_empresa_fk == 2) {
				this.contato.tipo_empresa_fk = 2;
			}else{
				this.contato.tipo_empresa_fk = 3;
			}

			/* O campo da tabela só recebe int, o value do campo esta como numeral, mas esta enviando como
			 string, então organizei para receber do campo esse número considerado string e enviar para a
			  tabela como int*/
			if(this.contato.grupo_economico_fk == 3){
				this.contato.grupo_economico_fk = 3;
			}else if(this.contato.grupo_economico_fk == 4) {
				this.contato.grupo_economico_fk = 4;
			} else if(this.contato.grupo_economico_fk == 5) {
				this.contato.grupo_economico_fk = 5;
			} else {
				this.contato.grupo_economico_fk = 6;
			}

			// Método criar
			this.service.criar(this.contato)
			.subscribe(resposta => {
				this.contatos.push = resposta;
				frm.reset();
				window.location.reload();
			});
		}

	}

	selecionadoPorId(idContato){
		this.service.selecionadoPorId(idContato)
		.subscribe(resposta => {
			this.contato = resposta;
		});
	}
}
