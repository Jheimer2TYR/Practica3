import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { CardBuscadorComponent } from './components/card-buscador/card-buscador.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'acercade', component: LoginComponent },
    { path: 'productos', component: CardproductosComponent },
    { path: 'producto/:id', component: CardproductoComponent },
    { path: 'buscarproducto/:termino', component: CardBuscadorComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'form', component: FormComponent },
    { path: '**', component: InicioComponent }  // La ruta comodín al final
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
