import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-simple-acknowledgement',
  templateUrl: './simple-acknowledgement.component.html',
  styleUrls: ['./simple-acknowledgement.component.css']
})
export class SimpleAcknowledgementComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  mean = ""
  standardDeviation = ""

  ngOnInit(): void {
    this.mean = this.route.snapshot.paramMap.get('mean') !== null ? this.route.snapshot.paramMap.get('mean') : ""
    this.standardDeviation = this.route.snapshot.paramMap.get('standardDeviation') !== null ? this.route.snapshot.paramMap.get('standardDeviation') : ""
  }

}
