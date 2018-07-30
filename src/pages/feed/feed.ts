import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [ //declarando o provedor
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed={
    titulo:"Charles França",
    data: "November 5, 1955",
    descricao: "Me and my brother s2",
    likes: 12,
    comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes: Array<any>; //Cria um array de objetos de qualquer tipo

  public nome_usuario:string = "Charles França do código" //Se identificar o tipo, estará restringindo apenas a ele. 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider //Adicionado o provedor no construtor pra ser usado posteriormente
  ) {
  }

  public soma(num1:number, num2:number): void {
    alert(num1+num2); // Manda um pop-up para o user "alertando" sobre algo
  }

  ionViewDidLoad() { //Coisas que mostra na tela ao ser carregado
    this.movieProvider.getLatestMovies().subscribe(
      data=>{ //Entra aqui caso a requisição tenha sucesso
        const response = data as any //Cria uma var que recebe data(requisição) como qualquer tipo
        const obj_retorno = JSON.parse(response._body) //retorna o corpo dos objetos da requisição e converte pra JSON
        this.lista_filmes = obj_retorno.results //Atribui à lista o obj 'results' que vem da requis.
        console.log(obj_retorno)
      , error=> // Entra aqui caso haja algum erro
        console.log(error)
      }
    )
    }


}


