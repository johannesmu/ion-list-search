import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  pageItems:Array<string> = [];
  items:Array<string>;
  searchTerm:string;
  searching:boolean = false;
  searchControl:FormControl;

  constructor() {
    this.items = [
      'banana',
      'apple',
      'pineapple',
      'durian',
      'blueberry',
      'papaya',
      'yam',
      'quince',
      'ximenia'
    ];
    this.searchInput = new FormControl();
    this.items.forEach( (item) => {
      this.pageItems.push(item);
    });
  }

  ngOnInit() {
    this.searchInput.valueChanges.subscribe( (search) => {
      console.log(search);
      this.searching = false;
      // this.restoreList();
        this.searchTerm = search;
        this.filterItems( search );
    });
  }

  filterItems( searchTerm ){
    this.searching = true;
    if( searchTerm.length > 0 ){
      this.pageItems.forEach( (pageItem, index) => {
        if( pageItem.indexOf( searchTerm ) == -1 ){
          this.pageItems.splice(index,1);
        }
      });
    }
    else{
      this.searching = false;
      console.log(this.items);
      this.restoreList();
      // this.pageItems = [];
      // this.items.forEach((item) => {
      //   this.pageItems.push(item);
      // });
    }
  }
  cancelSearch(){
    this.searching = false;
    //this.pageItems = this.items;
  }
  restoreList(){
    //this.pageItems = this.items;
    console.log(this.items);
    this.pageItems = [];
    this.items.forEach( (item) => {
      this.pageItems.push(item);
    });
  }
}
