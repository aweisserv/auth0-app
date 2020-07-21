import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  loading:boolean = false;

  constructor( public auth: AuthService ) { }

  ngOnInit(): void {
  }

  ejecutar(){

    this.loading = true;

    setTimeout( () => this.loading = false, 2000 )

  }

}
