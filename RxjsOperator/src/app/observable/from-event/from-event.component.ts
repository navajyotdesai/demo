import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  constructor() { }

  @ViewChild('addEvent') addEvent:ElementRef;

  ngOnInit(): void {

    
  }


  ngAfterViewInit(){
    let count=1;
    fromEvent(this.addEvent.nativeElement, 'click').subscribe(
      res=>{
        console.log('vedio '+count++);
        this.print();
      }
    )
  }


  print(){
    let el = document.createElement('li');
    el.innerHTML = 'RXJS';
    document.getElementById('elContainer').appendChild(el)
  }


}
