import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  inquiryType: string = '';
  answerBy: string = '';
  message: string = '';

  onSubmit(form:any) {
    console.log(form.value);
  }
}
