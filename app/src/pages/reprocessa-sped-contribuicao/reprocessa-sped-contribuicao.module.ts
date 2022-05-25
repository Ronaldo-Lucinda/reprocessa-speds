import { ReprocessaSpedContribuicaoComponent } from 'src/pages/reprocessa-sped-contribuicao/reprocessa-sped-contribuicao.component';
import { SharedModule } from './../../app/shared.module';
import { ReprocessaSpedContribuicaoRoutingModule } from './reprocessa-sped-contribuicao.routing'
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        ReprocessaSpedContribuicaoRoutingModule,
    ],
    declarations: [ReprocessaSpedContribuicaoComponent],
    exports: []
})
export class ReprocessaSpedContribuicaoModule { }
