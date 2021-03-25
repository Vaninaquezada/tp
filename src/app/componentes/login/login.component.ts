import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
loginForm = new FormGroup({
  email: new FormControl(''),
  password :new FormControl('')
});
seleccion :string = '';
usuario :string = '';
clave :string = '';

  constructor(private authSvc: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  async onLogin() {
    const {email,password} = this.loginForm.value;
    try {
     const user = this.authSvc.login(email,password);
      if (user) {
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  onChange(seleccion){
     
   switch (seleccion) {
     case "admin":
      
       this.loginForm.setValue({email:"usuario@usuario.com",password:"123456"});
     //  this.usuario ="usuario@usuario.com";
      // this.clave ="123456";
       console.log(this.loginForm.value);
  
       break;
     case "fulanito":
      // this.usuario ="fulanito@user.com";
      // this.clave ="222222";
       this.loginForm.setValue({email:"mail@hola.com",password:"clave123"});
         break;
   }
   
   //const { email, password } = {email:this.usuario,password:this.clave};
  // this.loginForm.setValue({ email, password });
  // console.log(this.loginForm.value);
  }

}
