import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReprocessaSpedContribuicaoComponent } from './reprocessa-sped-contribuicao.component';

const routes: Routes = [
    {
        path: '',
        component: ReprocessaSpedContribuicaoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReprocessaSpedContribuicaoRoutingModule { }
