import { Component, OnInit, Input } from '@angular/core';
import { Package } from '../package.model';
import { PackageService } from '../package.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {

package:Package;
id:number;

  constructor(private packageService:PackageService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.package=this.packageService.getPackage(this.id);
      }
    )
  }

  onAddBookingList(){
    this.packageService.addIngredientsBookingList(this.package.ingredients);
  }
  onEditPackage(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeletePackage(){
    this.packageService.deletePackage(this.id);
    this.router.navigate(['/package']);
  }

}
