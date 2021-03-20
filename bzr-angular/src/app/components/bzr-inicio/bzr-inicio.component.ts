import { Component, OnInit } from '@angular/core';
import {} from '../../material/material.module'

@Component({
  selector: 'bzr-bzr-inicio',
  templateUrl: './bzr-inicio.component.html',
  styleUrls: ['./bzr-inicio.component.css']
})
export class BzrInicioComponent implements OnInit {

  constructor() { }

  nome: string = 'Adilson';

  ngOnInit(): void {
  }

}
