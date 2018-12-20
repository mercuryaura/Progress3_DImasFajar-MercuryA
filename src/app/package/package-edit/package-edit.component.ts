import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package-edit',
  templateUrl: './package-edit.component.html',
  styleUrls: ['./package-edit.component.css']
})
export class PackageEditComponent implements OnInit {
  id:number;
  editMode=false;
  packageForm: FormGroup;
  packageService: any;
  constructor( private route:ActivatedRoute,
  private router: Router ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
        console.log(this.editMode);
      }
    )
    
  }
  onSubmit(){
  if(this.editMode){
    this.packageService.updatePackage(this.id, this.packageForm.value);
  }else{
    this.packageService.addPackage(this.packageForm.value);
  }
  this.onCancel();
  }
  onAddIngredient(){
    (<FormArray>this.packageForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'address' : new FormControl(null,Validators.required),
        'telephone' : new FormControl(null,Validators.required),
        'package':new FormControl(null,[Validators.required,,Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
      })
    );
  }
  onDeleteIngredient(index: number){
    (<FormArray>this.packageForm.get('ingredients')).removeAt(index);
  }
  onCancel(){
   this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm(){
    let packageName='';
    let packageImagePath='';
    let packageDescription='';
    let packageIngredients = new FormArray([]);
    if(this.editMode){
      const packages=this.packageService.getPackage(this.id);
      packageName=packages.name;
      packageImagePath=packages.imagePath;
      packageDescription=packages.description;
      if (packages['ingredient']){
        for(let ingredient of packages.ingredient){
          packageIngredients.push(
           new FormGroup({
             'name' : new FormControl(ingredient.name,Validators.required),
             'address' : new FormControl(ingredient.address,Validators.required),
             'telp' : new FormControl(ingredient.telp,Validators.required),
             'pck' : new FormControl(ingredient.pck,[Validators.required,,Validators.pattern(/^[1-9]+[0-9]*$/)
           ])
           }) 
          );

        }
      }
        }
this.packageForm =new FormGroup({
  'name': new FormControl(packageName,Validators.required),
  'imagePath':new FormControl(packageImagePath,Validators.required),
  'description':new FormControl(packageDescription,Validators.required),
  'ingredients': packageIngredients
});
  }

}
