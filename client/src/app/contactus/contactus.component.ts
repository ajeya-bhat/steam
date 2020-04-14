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
  public selectedContact :Contactus;

  onSubmit(form :NgForm){
    this.contactusService.postcontactus(form.value).subscribe((res)=>{
      document.getElementById("dis").textContent="Submitted";
    });
  }

  

}
