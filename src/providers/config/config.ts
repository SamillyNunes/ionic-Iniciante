import { Injectable } from '@angular/core';

// Boa prática: Ao invés de usar a string diretamente como parâmetro, armazená-la numa var e usar a var
//no lugar do parâmetro para não ocorrer nenhum erro depois
let config_key_name = "config";

@Injectable()
export class ConfigProvider {
  
  private config = { // Variável do tipo obj que tem alguns atributos
    showSLide: false,
    name: "",
    username: ""
  }

  constructor() {
   
  }

  //Recuperar os dados de configuração do localstorage
  getConfigData(): any{ 
    return localStorage.getItem(config_key_name);

  }

  //Gravar os dados de configuração de localstorage. Obs.: ? quer dizer opcional
  setConfigData(showSLide?: boolean, name?: string, username?: string) { 
    //Diz que vai gravar essas informações
    let config = { 
      showSLide: false,
      name: "",
      username: ""
    };

    // Se receber showSlide, então vai atualizar showSlide
    if(showSLide){ 
      config.showSLide=showSLide;
    }

    // Se receber name, vai atualizar name
    if (name){
      config.name=name;
    }

    // Se receber username, vai atualizar username
    if (username){
      config.username;
    }

    // Parâmetros: nome da var e valor. O localStorage só armazena string, logo, é necessário converter
    // pra string, com o JSON.stringfy, o objeto config
    localStorage.setItem(config_key_name, JSON.stringify(config));

  }

}
