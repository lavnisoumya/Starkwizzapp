import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css']
})
export class PrivacypolicyComponent implements OnInit {

  constructor(private approute:Router) { }
  enabled = true;

  ngOnInit(): void {
  }
  gotosecondpage(){
    this.approute.navigate(['/',this.enabled]);
  }
}
