import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservationList } from './reservationList';
import { ReservationItem } from './reservationItem';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
    imports: [RouterOutlet, FormsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule,
    MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatSlideToggleModule 
    ],
  styleUrl: './app.css'
})
export class App {
  protected title = 'reservationsmanager';

  private list = new ReservationList("Sukhwinder", [
    new ReservationItem("Go for a run", true),
    new ReservationItem("Get flowers"),
    new ReservationItem("Collect Tickets")
  ]);
  get username(): string
  {
    return this.list.user;
  }
 
  get itemCount(): number{
    return this.list.items.filter(item => !item.book).length;
  }

  get items(): readonly ReservationItem[] {
    return this.list.items.filter(item => this.showComplete || !item.book);
  }

  addItem(newItem: string) {
    if (newItem != "") {
    this.list.addItem(newItem);
   }
  }
  showComplete: boolean = false;
}
