import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userAdminComponent } from './userAdmin.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [userAdminComponent],
    exports: [userAdminComponent]
})

export class UserAdminModule {
       
 }
