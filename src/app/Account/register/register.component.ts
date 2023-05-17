import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  hide = true;
  RegFormdata!: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService) { }



  ngOnInit(): void {

    this.RegFormdata = this.fb.group({
      name: ['', Validators.required, Validators.email],
      email: ['', Validators.required],
      type: ['', Validators.required],
      number: ['', Validators.required],
      password: ['', Validators.required],
    });


  }



  onSubmit() {


    this.userService.postData(this.RegFormdata.value)
      .subscribe(response => {
        console.log(response)
      })

    alert(this.RegFormdata.value);
  }
}
