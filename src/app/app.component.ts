import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Helloworld';
  imgUrl="../assets/logo.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = ""; 
  nameError: string = "";

ngOnInit():void{
  this.title = "Hello from Bridgelabz";
}

onClick($event){
  console.log("Save button is clicked!", $event);
  window.open(this.url, "_blank");
}

onInput($event){
  console.log("Change Event Occured", $event.data);
  const nameRegex = RegExp('^[A-Z][a-zA-z]{2,}$');
  if(nameRegex.test(this.userName)){
    this.nameError = "";
    return;
  }
  this.nameError = "Name is incorrect";
}

}