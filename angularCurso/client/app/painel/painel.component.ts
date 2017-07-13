import {Component, Input, OnInit, ElementRef} from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'painel',
    templateUrl : './painel.component.html',
    styleUrls : ['./painel.component.css']
})
export class PainelComponent implements OnInit{

    @Input() titulo : String;

    constructor(private _elemento : ElementRef){
        this._elemento = _elemento;
    }

    ngOnInit(){

       this.titulo = this.titulo.length > 7
            //? this.titulo.substring(0,7) + "..."
            ? `${this.titulo.substr(0, 7)}...`
            : this.titulo

    }

    fadeOut(cb){
        $(this._elemento.nativeElement).fadeOut(cb);
    }

    
}