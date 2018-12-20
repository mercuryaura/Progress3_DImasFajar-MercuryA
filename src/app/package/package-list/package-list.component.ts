import { Component, OnInit, OnDestroy } from '@angular/core';
import { Package } from '../package.model';
import { PackageService } from '../package.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit, OnDestroy {
  packages:Package[];
  subscription: Subscription;

  constructor(private packageService:PackageService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.packageService.recipesChanged
    .subscribe(
      (packages: Package[]) =>{
        this.packages = packages;
      }
    );
    this.packages= this.packageService.getPackages();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
this.subscription.unsubscribe();
  }
}
