import { SharedModule } from './../../../app/shared.module';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})
export class FooterModule { }
