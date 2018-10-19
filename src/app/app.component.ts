import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!';
  appName = 'Username';
  userName = '';
  
  submitUserName() {
	this.userName = ((document.getElementById("username-input") as HTMLInputElement).value);
	((document.getElementById("username-input") as HTMLInputElement).value) = '';
  }
  
  clearUserName(){
	this.userName = '';
	((document.getElementById("username-input") as HTMLInputElement).value) = '';
  }
}
