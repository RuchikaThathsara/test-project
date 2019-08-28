import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  @ViewChild('frmLogin') frmLogin: NgForm;
  @ViewChild('txtUsername') txtUsername: ElementRef;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.loginService.isAuthenticated().subscribe(resp => {
      this.router.navigateByUrl('/dashboard');
    }, error1 => {
      if (error1.status !== 401) {
        console.log(error1);
      }
    });
  }

  login() {
    if (!this.frmLogin.valid) {
      alert('Please enter valid login credentials');
      this.txtUsername.nativeElement.focus();
    } else {
      this.loginService.authenticate(this.username, this.password).subscribe(
        resp => {
          this.router.navigateByUrl('/dashboard');
        }, error1 => {
          if (error1.status === 401) {
            alert('Invalid login credentails, please enter valid data');
            this.txtUsername.nativeElement.select();
          } else {
            console.log(error1);
          }
        }
      );
    }
  }
}
