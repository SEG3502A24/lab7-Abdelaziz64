import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
  standalone: true,
  imports: [NgIf]
})
export class UserDataComponent {
  userData: any;

  constructor() {
    this.userData = history.state.userData || null;
  }

  ngOnInit(): void {
    // Any initialization logic
  }
}
