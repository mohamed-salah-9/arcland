import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  latitude = 30.0565261;
  longitude = 31.3291268;
  onChosenLocation = false;
  constructor() { }

  ngOnInit() {
  }
  
  onChooseLocation(event){
    this.onChosenLocation = true;
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

}
