import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Favoritos } from 'src/app/models/favoritos';

@Component({
  selector: 'bzr-favoritos-list',
  templateUrl: './favoritos-list.component.html',
  styleUrls: ['./favoritos-list.component.css']
})
export class FavoritosListComponent implements OnInit {
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

   favoritos: Favoritos[] = [
    {id: 1,nome: 'Caverna do Dragao',
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/Caverna-do-Dragao.jpeg.webp'
    },
    {
      id: 2, nome: 'Papa Leguas', 
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/Papaleguas.jpg.webp'
    },
    {
      id: 3, nome: 'Super Amigos',
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/Super-amigos.jpg.webp'
    },
    {
      id: 4, nome: 'Scooby Doo', 
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/scooby-doo.jpg.webp'
    },
    {
      id: 5, nome: 'Smurfs', 
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/smurfs.jpg.webp'
    },
    {
      id: 5, nome: 'Corrida Maluca.',
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/Corrida-maluca.jpg.webp'
    },
    {
      id: 5, nome: 'Manda Chuva.', 
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/Manda-chuva.jpg.webp'
    },
    {
      id: 5, nome: 'Pernalonga e Patolino',
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/Pernalonga-e-patolino.jpg.webp'
    },
    {
      id: 5, nome: 'Tom e Jerry',
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/Tom-e-Jerry.jpg.webp'
    },
    {
      id: 5, nome: 'Pipa-Pau', 
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/Pipa-Pau.jpg.webp'
    },
    {
      id: 5, nome: 'Popeye', 
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/Popeye.jpg.webp'
    },
    {
      id: 5, nome: 'Thundercats',
      imagemUrl: 'https://www.revistabula.com/wp/wp-content/uploads/2018/03/Thundercats.jpg.webp'
    },
   
  ];
  displayedColumns: string[] = ['Nome', 'Avaliacao', 'Descricao', 'Imagem'];


 
 
  constructor(
    private router: Router
  ) { }
  
    exibeFavoritos:  boolean = false;
    
  ngOnInit(): void {
  }


  exibirFavoritos(){
    this.exibeFavoritos = true;
  }
  
  ocultarFavoritos(){
    this.exibeFavoritos = false;
  }



}

