import { IFilme } from '../models/IFilmes.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'App Filmes';
  listaFilmes: IFilme[] = [
    {       
      nome: 'Cruella (2021)',
      lancamento: '27/05/2021 (BR)',
      duracao: '2h 14m',
      classificacao: '12',
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/f/f6/Cruella_2021_film_poster.jpg',
      generos: ['Comédia', 'Aventura'],
      pagina: '/cruella'
    },
    {       
      nome: 'O Esquadrão Suícida (2021)',
      lancamento: '05/08/2021 (BR)',
      duracao: '2h 12m',
      classificacao: '14',
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/4/4e/The_Suicide_Squad_official_poster.jpeg',
      generos: ['Comédia', 'Aventura', 'Ação'],
      pagina: '/o-esquadrao-suicida'
    } 

  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Você deseja adicionar esse filme aos <strong>favoritos</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Adicionar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 3000,
      color: 'success'
    });
    toast.present();
  }
}