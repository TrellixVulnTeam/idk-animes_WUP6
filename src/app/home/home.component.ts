import { AnimeHistoryComponent } from '../anime-history/anime-history.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AnimeHistoryComponent, {
      panelClass: 'custom-modal',
    });
  }
}