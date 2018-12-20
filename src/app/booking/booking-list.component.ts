import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { BookingListService } from '../booking/booking-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit, OnDestroy {

  ingredients:Ingredient[];
  private subscription: Subscription;
 
  constructor(private slsService:BookingListService) { }

  ngOnInit() {
  this.ingredients=this.slsService.getIngredients();
  this.subscription=this.slsService.IngredientChange
  .subscribe(
    (Ingredient:Ingredient[])=>{
      this.ingredients=Ingredient;
    }
  );
  }
  onEditItem(index: number){
    this.slsService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
