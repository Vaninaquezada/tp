import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
//public isLogged : boolean = false;
//public user:any;
public user$ : Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService,private router:Router) { }

  async ngOnInit() {
    //console.log('Nabar');
    //this.user = await this.authSvc.getUsuario();
   
   // if(this.user){
   //   this.isLogged = true;
    //  console.log('user->',this.user);
    //}
  }
  async logOut(){
    try{
     await this.authSvc.logout();
     this.router.navigate(['/']);
    }catch(error){
      console.log(error);
    }
   
  }
}
