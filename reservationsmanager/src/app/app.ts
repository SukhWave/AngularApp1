import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservationList } from './reservationList';
import { ReservationItem } from './reservationItem';
import { FormsModule } from '@angular/forms';
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
  styleUrl: './app.css',
  imports: [
    RouterOutlet, FormsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule,
    MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatSlideToggleModule
  ]
})
export class App {
  protected title = 'reservationsmanager';

  private list = new ReservationList("Sukhwinder", [
    new ReservationItem("Blue Lake - 9:00 AM to 12:00 PM"),
    new ReservationItem("Blue Lake - 12:00 PM to 3:00 PM"),
    new ReservationItem("Blue Lake - 3:00 PM to 6:00 PM"),

    new ReservationItem("Green Woods - 9:00 AM to 12:00 PM"),
    new ReservationItem("Green Woods - 12:00 PM to 3:00 PM"),
    new ReservationItem("Green Woods - 3:00 PM to 6:00 PM"),

    new ReservationItem("Sunny Trails - 9:00 AM to 12:00 PM"),
    new ReservationItem("Sunny Trails - 12:00 PM to 3:00 PM"),
    new ReservationItem("Sunny Trails - 3:00 PM to 6:00 PM"),

    new ReservationItem("Rocky Hills - 9:00 AM to 12:00 PM"),
    new ReservationItem("Rocky Hills - 12:00 PM to 3:00 PM"),
    new ReservationItem("Rocky Hills - 3:00 PM to 6:00 PM"),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => item.book).length;
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
