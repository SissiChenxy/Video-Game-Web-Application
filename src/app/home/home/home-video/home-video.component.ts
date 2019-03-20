import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { RestApiService } from '../../../common/restapi.service';
import { Game } from "../../../common/games/game";

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.scss']
})

@Pipe({ name: 'safe' })
export class HomeVideoComponent implements OnInit {


    game: Game;
  
    constructor(private _restApiService: RestApiService, private sanitizer: DomSanitizer) { }

    ngOnInit() {
      this.getGameTrick();
    }

  getGame(): void {
    this.getGameFromDB(0)
  }

  getGameTrick(): void {
    this._restApiService.getGamesFromDB()
      .then(games => {
        this.game = games[8];
      }) 
  }

  getGameFromDB(id: number):void {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game = game[id])
  }

  }
