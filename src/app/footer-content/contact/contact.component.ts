import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  error: any = [];
  success = null;
  submitted = false;
  answerTypes: any = [];
  inquireTypes: any = [];
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    inquireTypeId: new FormControl(''),
    answerTypeId: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      inquireTypeId: ['', [Validators.required]],
      answerTypeId: ['', [Validators.required]],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(255),
        ],
      ],
    });
    this.getAnswerTypes();
    this.getInquiryTypes();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(form: any) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    else{
    this.contactService.sendContactForm(form.value).subscribe(
    );
    this.submitted = false;
    this.form.reset();
    }
  }
  async getAnswerTypes() {
    return this.contactService.getAnswerTypes().subscribe((data) => {
      this.answerTypes = data;
    });
  }
  async getInquiryTypes() {
    return this.contactService.getInquireTypes().subscribe((data) => {
      this.inquireTypes = data;
    });
  }
}
