import {Component} from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import {ProdutoComponent} from './produto/produto.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MyCurrencyFormatterDirective } from "./currency/currencyFormatter";


@Component({
    moduleId : module.id,
    selector : 'app',
    templateUrl : './app.component.html',
    
})
export class AppComponent{
    vlrAlterado : string = '';

    produto : ProdutoComponent = new ProdutoComponent();
    meuForm : FormGroup;

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:8081/wal/incluir';

    constructor(fb : FormBuilder, http : Http){
        this.meuForm = fb.group({
            nome : ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            valor : [0, Validators.required],
            quantidade : [''],
            url : ['', Validators.required]
        });

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    cadastrar(event){
        event.preventDefault();

        this.vlrAlterado = this.produto.valor.replace(',', '.');
        this.produto.valor = this.vlrAlterado;
        
        console.log(JSON.stringify(this.produto));

        this.http.post(this.url
            , JSON.stringify(this.produto)
            , {headers : this.headers})
            .subscribe(res => console.log(res.json));

    }

    onAmountChange(ev) {
    // explicitly update state (one way data flow)
    this.produto.valor = ev;
  }

}