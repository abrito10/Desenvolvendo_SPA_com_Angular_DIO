import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bzr-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pessoa: any = {
    nome:  '',
    idade: 0,
  }
}
