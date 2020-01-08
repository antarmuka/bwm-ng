import { RentalComponent } from './rental.component';
import { NgModule } from '@angular/core';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RentalComponent, RentalListComponent, RentalListItemComponent],
  imports: [CommonModule]
})
export class RentalModule { }
