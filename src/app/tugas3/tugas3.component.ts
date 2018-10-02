import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  styleUrls: ['./tugas3.component.css']
})
export class Tugas3Component implements OnInit {
  textprint = "POLITEKNIK NEGERI MALANG"

  texts = [];
  counter : number = 0;
  genap = false

  constructor() { }

  ngOnInit() {
  }

  CreateText(){
    var perclick = new Array();
    perclick[0] = this.textprint;
    this.counter++;
    perclick[1] = this.counter;
    this.texts.push(perclick);
    if(this.texts.length % 2==0){
      this.genap = true
    }else{
      this.genap = false
    }
    console.log(this.counter)
    console.log(this.textprint)
  }

}
