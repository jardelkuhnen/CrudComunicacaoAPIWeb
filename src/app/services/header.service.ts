import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export class Menu {
    constructor(public name: string, public path: string) { }
}


@Injectable({providedIn: 'root'})
export class HeaderService {

    getMenus(): Observable<Menu[]> {
        return of([
            new Menu('Pedido', '/pedidos'),
            new Menu('Cliente', '/clientes'),
            new Menu('Produto', '/produtos'),
            new Menu('Fornecedor', '/fornecedores')
        ]);
    }

}