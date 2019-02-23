import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'component-communication';

  @ViewChild(ChildComponent) child;

  message: string;

  ngAfterViewInit() {
    this.message = this.child.childMessage;
  }
}
