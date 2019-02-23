import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'component-communication';
  message: string;

 constructor(private data: DataService) { }

 ngOnInit() {
  this.data.currentMessage.subscribe(message => this.message = message);
 }
}
