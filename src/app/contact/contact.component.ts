import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm:FormGroup<{ message: FormControl<string | null>; email: FormControl<string |null> }> = new FormGroup({
    email : new FormControl('',[Validators.email,Validators.required]),
    message: new FormControl('',[Validators.required])
  })

  get email(){
    return this.contactForm.get('email')
  }

  get message(){
    return this.contactForm.get('message')
  }

  contactUs(){
    console.log(this.contactForm.value)
  }

}
