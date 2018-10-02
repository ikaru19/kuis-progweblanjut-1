import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  username = '';
  usernameprint = '';


  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onCreationStatus() {
    if (this.username != ''){
        this.allowNewServer = false;
        this.usernameprint = this.username
        this.username = '' 
        
    }
  }

  getUsername(){
    return this.usernameprint;
  }

  onUpdateServerName(event: Event) {
    if(this.username != ' '){
      this.username = (<HTMLInputElement>event.target).value;
    }
    
  }

  checking(){
    if (this.username!= '') {
      this.allowNewServer = true;
    }else{
      this.allowNewServer = false;
    }
  }

  

}
