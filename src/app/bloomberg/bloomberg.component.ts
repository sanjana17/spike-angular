import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-bloomberg',
  templateUrl: './bloomberg.component.html',
  styleUrls: ['./bloomberg.component.css']
})
export class BloombergComponent implements OnInit {
  recipeId: string;
  displayedColumns = ['key', 'value'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor(route: ActivatedRoute) {
    this.recipeId = route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}

export interface Element {
  key: string;
  value: string;
}

const ELEMENT_DATA: Element[] = [
  {key: 'feed name', value: 'Bloomberg'},
  {key: 'feed file name', value: 'BLOX.RCP'},
  {key: 'frequency', value: 'Daily'},
  {key: 'format', value: 'GAUSS'},
  {key: 'Product Name', value: 'BLO'},
  {key: 'Ztags', value: 'BLO'},
  {key: 'Implementation Logic', value: 'text=different (new or change), \n' +
  'Author abstract=needs_update (change),\n' +
  'index=needs_update (change)'},
  {key: 'Exclusion Mcodes', value: '0595,0596,0699,0701,0790,0BSB,0CRS,0CWG...'},
  {key:'Exclusion articles', value:'454727579'}
];
