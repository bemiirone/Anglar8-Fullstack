import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isRegister = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerToggle() {
    this.isRegister = true;
  }

  cancelRegisterMode(mode: boolean) {
    this.isRegister = mode;
  }

}
