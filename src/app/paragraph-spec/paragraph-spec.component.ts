import { Component, OnInit } from '@angular/core';
import list from '../../words'; 

@Component({
  selector: 'paragraph-spec',
  templateUrl: './paragraph-spec.component.html',
  styleUrls: ['./paragraph-spec.component.css'],
})
export class ParagraphSpecComponent implements OnInit {

  list: any = list; 

  constructor() { }

  ngOnInit() {
  }

  generateIpsum() {
    console.log(this.list);   
  }

}
