import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component'
import { HeaderModule } from 'src/components/layout/header/header.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
    imports: [
        RouterModule,
        HeaderModule,
        FooterModule

    ],
    exports: [LayoutComponent],
    declarations: [LayoutComponent]
})
export class LayoutModule { }
