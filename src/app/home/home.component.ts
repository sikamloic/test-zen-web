import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  register: FormGroup
  qrcode: any
  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService
  ){
    this.register = this.formbuilder.group({
      nom: formbuilder.control('', [Validators.required]),
      age: formbuilder.control('', [Validators.required]),
      tel: formbuilder.control('', [Validators.required]),
      csp: formbuilder.control('', [Validators.required]),
      photo: formbuilder.control('', [Validators.required]),
    })
  }
  login(){
    this.userService.register(
      this.register.value.nom,
      this.register.value.age,
      this.register.value.tel,
      this.register.value.csp,
      this.register.value.photo,
    )
    .subscribe({
      next: ((res: any) =>{
        console.log(res._id)
        this.qrcode = `https://test-zen-web.vercel.app/detail/${res._id}`
      })
    })
  }
}
