import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items=[
    {
      social: 'fa-eye',
      numberitem: '112',
    },
    {
     social: 'fa-comments',
     numberitem: '0',
   },
   {
     social: 'fa-shopping-cart',
     numberitem: '5',
   },
   {
     social: 'fa-thumbs-up',
     numberitem: '1',
   },
  ]
  texts =[
    {
     text: 'tình cảm',
 
    },
    {
     text:'lãng mạn',
    },  
    {
      text:' thanh mai trúc mã',
    }
  ]
  constructor() {}

  ngOnInit(): void {
    
  }

 
}
