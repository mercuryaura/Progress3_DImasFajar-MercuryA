import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackageComponent } from './package/package.component';
import { BookingListComponent } from './booking/booking-list.component';
import { PackageListComponent } from './package/package-list/package-list.component';
import { PackageDetailComponent } from './package/package-detail/package-detail.component';
import { PackageItemComponent } from './package/package-list/package-item/package-item.component';
import { BookingEditComponent } from './booking/booking-edit/booking-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BookingListService } from './booking/booking-list.service';
import { PackageEditComponent } from './package/package-edit/package-edit.component';
import { PackageStartComponent } from './package/package-start/package-start.component';
import { PackageService } from './package/package.service';
import { DataStorageService } from './shared/data-storage.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackageComponent,
    BookingListComponent,
    PackageListComponent,
    PackageDetailComponent,
    PackageItemComponent,
    BookingEditComponent,
    DropdownDirective,
    PackageStartComponent,
    PackageEditComponent,
    FooterComponent,
    FooterComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookingListService, PackageService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
