import { Injectable } from '@angular/core';
import { Package } from '../package/package.model';
import { Ingredient } from '../shared/ingredient.model';
import { BookingListService } from '../booking/booking-list.service';
import { Subject } from 'rxjs/Subject';
@Injectable(

)
export class PackageService {
  [x: string]: any;
  packagesChanged=new Subject<Package[]>();
  private packages:Package[]=[
new Package('Family Package','Sesi foto 2 jam, 25x shoot, 1 lokasi, ukuran print 5x7, eksklusif album foto', 'https://cdn.idntimes.com/content-images/post/20180330/rachelvenya-34fc61b78f4d877d31eba83b5d3c77aa.jpg',
[
]),
new Package('Wedding Package','Sesi foto 9 jam, unlimited shoot, 1 lokasi, ukuran print 5x7, eksklusif album','../src/app/img/wedding.jpg',
[
]),  
new Package('Prewedding Package','Sesi foto 3 jam, 20 shoot, max 4 lokasi, ukuran max 10x8.','https://cdn0-production-images-kly.akamaized.net/wo_m3teg5Cdp6PKi_ILCztId4xk=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1835198/original/072061000_1516181691-1702731.jpg',
[
]),  
new Package('Graduation Package','Sesi foto 3 jam, 100 shoot, 1 lokasi','https://whiteroomstudio.com.sg/phpthumb/phpThumb.php?src=%2Fimages%2FWRSP%2Fgalleryphotos%2F106%2FCaline_28.jpg',
[
]),
new Package('Year Book Package','Sesi foto 2 minggu per 3 jam, 10 shoot, 3 lokasi','http://fullwarna.com/wp-content/uploads/2018/02/Buku-Tahunan-Populer-Anak-Sekolah.jpg',
[
]),
new Package('Personal Photo Package','Sesi foto 2 jam, 10 shoot, 1 lokasi, ukuran max 10x8','https://i.pinimg.com/originals/06/9f/e5/069fe55f2126f421aa6a342c810eff6f.jpg',
[
]),
new Package('Baby Photo Package','Sesi foto 4 jam, 10 shoot, 1 lokasi, ukuran 5x7','https://cdn.idntimes.com/content-images/post/20180112/8-3d4895ef19bd58e5c85167ea85bae4fb_600x400.jpg',
[
]),
];

  getPackages(){
    return this.package.slice();
  }
  addIngredientsBookingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getPackage(index:number){
    return this.packages [index] ;
  }
constructor(private slsService: BookingListService) { 
}
  setPackages(packages: Package[]) {
    this.packages = packages;
    this.packagesChanged.next(this.packages.slice());
  }

addPackage(packages: Package){
this.packages.push(packages);
this.packagesChanged.next(this.packages.slice());
}
updatePackage(index: number, newPackage: Package){
this .packages[index]= newPackage;
this.packagesChanged.next(this.packages.slice());
}
deletePackages(index: number){
  this.packages.splice(index, 1);
  this.packagesChanged.next(this.packages.slice());
}
}