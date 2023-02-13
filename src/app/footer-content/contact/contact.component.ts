import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  inquiryType: string = '';
  answerBy: string = '';
  message: string = '';
  answerTypes: any = [];
  inquireTypes: any = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getAnswerTypes();
    this.getInquireTypes();
  }

  onSubmit(form: any) {
    console.log(form.value);
  }
  getAnswerTypes() {
    return this.contactService.getAnswerTypes().subscribe((data) => {
      this.answerTypes = data;
    });
  }
  getInquireTypes() {
    return this.contactService.getInquireTypes().subscribe((data) => {
      this.inquireTypes = data;
    });
  }
}
