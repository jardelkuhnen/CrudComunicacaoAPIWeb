import { PedidoComponent } from './pedido/pedido.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './cliente/cliente/cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'pedidos', pathMatch: 'full'},
  { path: 'pedidos', component: PedidoComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'produtos', component: ProdutoComponent },
  { path: 'fornecedores', component: FornecedorComponent },
  { path: '**', redirectTo: 'pedidos' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
