import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import * as $ from 'jquery';
import WOW from 'wow.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
    new WOW().init();
    var rellax = new Rellax('.rellax');  
  }
  
  

}
 