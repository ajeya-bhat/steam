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

  constructor(public contactusService:ContactusService) { }

  ngOnInit(): void {
  }
  public selectedContact :any={};

  onSubmit(){
    
    this.contactusService.postcontactus(this.selectedContact).subscribe((res)=>{
      document.getElementById("dis").textContent="Your Request has been Recieved";
    });
  }

  

}
