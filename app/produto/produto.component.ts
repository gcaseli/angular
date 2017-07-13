import {Component, Input} from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'produto',
    templateUrl : './produto.component.html'
})
export class ProdutoComponent{
    @Input() nome : string = '';
    @Input() valor : string ='';
    quantidade : number = 0;
    @Input() url : string ;
    _id : string;
}