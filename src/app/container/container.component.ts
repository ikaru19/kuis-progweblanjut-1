import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  nim = ''
  nama = ''
  kelas = ''
  daftarmhs : Mahasiswa[] =  []
  mhs
  constructor() { }

  ngOnInit() {
  }


  tambahmhs(){
    this.mhs = new Mahasiswa(this.nim,this.nama,this.kelas)
    this.daftarmhs.push(this.mhs)
    this.nim = ''
    this.nama = ''
    this.kelas = ''
    
  }

}
