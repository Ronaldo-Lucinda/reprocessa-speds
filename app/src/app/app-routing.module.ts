import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/components/layout/layout.component';
import { LayoutModule } from 'src/components/layout/layout.module';
import { PastaArquivosComponent } from 'src/app/pages/pasta-arquivos/pasta-arquivos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'sped',
        loadChildren: () => import('../pages/reprocessa-sped-contribuicao/reprocessa-sped-contribuicao.module')
          .then(modulo => modulo.ReprocessaSpedContribuicaoModule)
      }
    ]
  }
];

@NgModule({
  declarations: [PastaArquivosComponent],
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule, PastaArquivosComponent]
})
export class AppRoutingModule { }
