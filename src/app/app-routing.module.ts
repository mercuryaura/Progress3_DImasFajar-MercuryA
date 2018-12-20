import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PackageComponent } from './package/package.component';
import { BookingListComponent } from './booking/booking-list.component';
import { PackageStartComponent } from './package/package-start/package-start.component';
import { PackageDetailComponent } from './package/package-detail/package-detail.component';
import { PackageEditComponent } from './package/package-edit/package-edit.component';

const appRoutes:Routes=[
    { path:'',redirectTo:'/package',pathMatch:'full' },
    { path:'package',component:PackageComponent,children:[
        { path:'',component:PackageStartComponent },
        { path: 'new',component:PackageEditComponent },
        { path: ':id',component:PackageDetailComponent },
        { path:':id/edit',component:PackageEditComponent },
    ]},
    { path:'booking-list',component:BookingListComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}