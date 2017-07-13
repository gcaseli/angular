"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var produto_component_1 = require("./produto/produto.component");
var botao_module_1 = require("./botao/botao.module");
var currencyFormatter_1 = require("./currency/currencyFormatter");
var currency_pipe_1 = require("./currency/currency.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule, botao_module_1.BotaoModule],
        declarations: [app_component_1.AppComponent, produto_component_1.ProdutoComponent, currencyFormatter_1.MyCurrencyFormatterDirective],
        bootstrap: [app_component_1.AppComponent],
        providers: [currency_pipe_1.MyCurrencyPipe]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map