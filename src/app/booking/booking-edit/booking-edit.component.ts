import { Component, OnInit,OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { BookingListService } from '../booking-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
subscription:Subscription;
editMode= false;
editedItemIndex:number;
editedItem:Ingredient;
  constructor(private slsService:BookingListService) { }

  ngOnInit() {
    this.subscription=this.slsService.startedEditing
    .subscribe(
      (index: number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.slsService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          address: this.editedItem.address
        })
      }
    );
  }
onSubmit(form: NgForm){
  const value =form.value;
  const newIngredient= new Ingredient(value.name,value.address,value.telp,value.pck);
  if(this.editMode){
    this.slsService.updateIngredient(this.editedItemIndex, newIngredient);
  }else{
    this.slsService.addIngredient(newIngredient);
  }
  this.editMode= false;
  form.reset();
}
onClear(){
  this.slForm.reset();
  this.editMode=false;

}
onDelete(){
  this.slsService.deleteIngredient(this.editedItemIndex);
this.onClear();
}
ngOnDestroy(){
this.subscription.unsubscribe();
}
}