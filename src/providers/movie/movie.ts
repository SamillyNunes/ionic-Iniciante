import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3" //Para não repetir o código que pode ser usado várias vezes

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){ //Função pra pegar requisição dos últimos filmes criada por mim
    return this.http.get(this.baseApiPath +"/movie/popular?api_key=2577d69700e36a4e7443e6b54b6f6a4b") //retorna a requisição da url do bd que eu quis(últimos filmes) com a chave que eu tenho
  }

}
