import { Component, OnInit } from '@angular/core';
import { Game } from "../../../common/games/game";
import { RestApiService } from '../../../common/restapi.service';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  game: Game;
  game1: Game;
  game2: Game;
  game3: Game;
  game4: Game;
  gameTest : Game;
  listOfGames: Game[]
  constructor(private _restApiService: RestApiService, private _homeService: HomeService) { }

  ngOnInit() {
    this.getGame1();
    this.getGame2();
    this.getGame3();
    this.getGame4();
    this.getGames();
    
  }
  getGames(): void {
    this._restApiService.getGamesFromDB()
      .then(games => {
        this.listOfGames = games;
      }) 
  }
  getGame1(): void {
    this._restApiService.getGamesFromDB()
      .then(games => {
        this.game1 = games[4];
      }) 
  }
  getGame2(): void {
    this._restApiService.getGamesFromDB()
      .then(games => {
        this.game2 = games[2];
      }) 
  }
  getGame3(): void {
    this._restApiService.getGamesFromDB()
      .then(games => {
        this.game3 = games[5];
      }) 
  }
  getGame4(): void {
    this._restApiService.getGamesFromDB()
      .then(games => {
        this.game4 = games[6];
      }) 
  }

  sortbyscore(): void {
    var sortedArray: Game[] = this.listOfGames.sort((obj1, obj2) => {
      if (obj1.score > obj2.score) {
        return 1;
      }

      if (obj1.score < obj2.score) {
        return -1;
      }

      return 0;
    });

    this.listOfGames = sortedArray.reverse();
  }


  getGame(): void {
    // this.getGame1FromDB(0)
    // this.getGame2FromDB(1)
    // this.getGame3FromDB(9)
    // this.getGame4FromDB(3)
    //this.game1 = this.listOfGames[2];
  }

  getGame1FromDB(id: number):void {
    this._restApiService.getGameFormDB(id)
    .then(game => console.log("game 0 here :"+game[0]))
  }
  getGame2FromDB(id: number):void {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game2 = game)
    
    console.log(this.game2)
  }
  getGame3FromDB(id: number):void {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game3 = game[0])
  }
  getGame4FromDB(id: number):void {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game4 = game[0])
  }

}

