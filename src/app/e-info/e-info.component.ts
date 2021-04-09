import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css']
})
export class EInfoComponent implements OnInit {

  infoRecieved1: string[] = [];
  infoRecieved2: string[] = [];
  infoRecieved3: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
