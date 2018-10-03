import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
i = 0;

  constructor(public navCtrl: NavController) {
    this.items = [
      {title: 'Madeas witness protection'},
      {title: 'For better or worse'},
      {title: 'The marriage counselor'},
      {title: 'The single moms club'},
      {title: 'Diary of a black mad woman'}
  ];

  }

  removeItem(item){
 
    for(this.i = 0; this.i < this.items.length; this.i++) {
 
      if(this.items[this.i] == item){
        this.items.splice(this.i, 1);
      }
 
    }

    
 
  }
  doRefresh(refresher){
    this.items = [
      {title: 'Madeas witness protection'},
      {title: 'For better or worse'},
      {title: 'The marriage counselor'},
      {title: 'The single moms club'},
      {title: 'Diary of a black mad woman'}
  ];
    
 setTimeout(() => {
   console.log("Async operation has ended");
   refresher.complete();
 }, 2000);
}
 


}
