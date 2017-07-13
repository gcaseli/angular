import 'rxjs/add/operator/map';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProdutoComponent} from './produto/produto.component';
import {BotaoModule} from './botao/botao.module';
import {MyCurrencyFormatterDirective} from './currency/currencyFormatter';
import {MyCurrencyPipe} from './currency/currency.pipe';


@NgModule({
    imports: [BrowserModule, HttpModule
             , FormsModule
             , ReactiveFormsModule, BotaoModule],
    declarations: [AppComponent, ProdutoComponent, MyCurrencyFormatterDirective],
    bootstrap: [AppComponent],
    providers:[MyCurrencyPipe]
})
export class AppModule{}