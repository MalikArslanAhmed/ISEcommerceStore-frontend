import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent implements OnInit {
  constructor(
  ) {
  }

  ngOnInit() {
    console.log('from website');

  }
}
