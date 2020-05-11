import { Component, OnInit } from '@angular/core';
import WOW from 'wow.js'
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new WOW().init();
  }

}
