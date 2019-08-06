import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  catalogo:Array<Object> = []
  

  ionViewDidEnter() {
    console.log("EXECUTOU O VIEW DID ENTER ")
    this.catalogo.push({
      nome: 'queijo maluco gourmet',
      descricao: 'queijo, catupiry, batata',
      preco: 'R$72'

  })

}

}
