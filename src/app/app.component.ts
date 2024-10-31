import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { PiechartComponent } from "./piechart/piechart.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PiechartComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'HackatonAppFrontend';

  @ViewChild('piechart')
  piechart!: PiechartComponent;

  getData() {
    this.piechart.getData();
  }
}
