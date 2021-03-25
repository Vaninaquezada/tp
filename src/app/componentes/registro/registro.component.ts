import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AuthService]
})
export class RegistroComponent implements OnInit {
  registerForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authSvc: AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  async onRegister(){
    const {email,password} = this.registerForm.value;
    try {
      const user = this.authSvc.registro(email,password);

      if (user) {
        //this.authSvc.login(email,password);
        this.router.navigate(['/home']);
      }
    } catch (error) {
      
    }
  }
}
