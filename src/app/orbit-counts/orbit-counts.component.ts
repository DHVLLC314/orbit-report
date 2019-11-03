import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite'
import { Key } from 'protractor';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  count: number = 0;

  constructor() { }

  ngOnInit() {
  }
  
  // countByType(satellite:[]) : void {
  //   for(let i=0; i<satellite.length; i++) {
  //     console.log(satellite[i])
  //     for (key in satellite[i]) {
  //       console.log(key['name'])
  //     }
  //   }
  // }
}
