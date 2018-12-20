import { Http, Response } from '@angular/http';
import { PackageService } from '../package/package.service';
import { Package } from '../package/package.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class DataStorageService {
    constructor (private http: Http, private packageService: PackageService) {}

    storePackages() {
        return this.http.put('https://ng-recipe-book-b7323.firebaseio.com/recipes.json', this.packageService.getPackages());
    }
    getPackages() {
        this.http.get('https://ng-recipe-book-b7323.firebaseio.com/recipes.json')
        .map(
            (response: Response) => {
                const packages: Package[] = response.json();
                for (let packagse of packages) {
                    if (!packages['ingredients']) {
                        packages['ingredients'] = [];
                    }
                }
                return packages;
            }
        )
        .subscribe(
            (packages: Package[]) => {
                 this.packageService.setPackages(packages);
            }
        );
    }
}