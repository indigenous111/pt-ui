import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  project = "pt";
  version = "v-0.0.1"; 
  constructor() { }

  ngOnInit() {
  }

}
