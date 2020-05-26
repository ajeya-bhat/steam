import { ContactusService } from './../shared/contactus.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contactus } from '../shared/contactus.model';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [ContactusService]
})
export class ContactusComponent implements OnInit {
  public name:String;
  public email:String;
  public request:String;

  constructor(public contactusService:ContactusService) { }

  ngOnInit(): void {
  }
  public selectedContact :any={};

  onSubmit(){
    if(typeof(this.name)==="undefined" || typeof(this.email)==="undefined"|| typeof(this.request)==="undefined"){
      alert("Fields cannot be empty!");
      return;
    }
    
    var email1 = "email";
    var request1 = "request";
      var name1 = "name";
      this.selectedContact[name1]=this.name;
      this.selectedContact[email1]=this.email;
      this.selectedContact[request1]=this.request;
      console.log(this.selectedContact);
    this.contactusService.postcontactus(this.selectedContact).subscribe((res)=>{
      (<HTMLInputElement>document.getElementById("fn")).value="";
      (<HTMLInputElement>document.getElementById("fr")).value="";
      (<HTMLInputElement>document.getElementById("fe")).value="";
      document.getElementById("dis").textContent="Your Request has been Recieved";
    });
  }

  

}
