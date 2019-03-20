import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { RestApiService } from '../../../common/restapi.service';
import { Game } from "../../../common/games/game";
import { SlideShowComponent } from '../slide-show/slide-show.component';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-home-video3',
  templateUrl: './home-video3.component.html',
  styleUrls: ['./home-video3.component.scss']
})
export class HomeVideo3Component implements OnInit {


  game: Game;
  
  constructor(private _restApiService: RestApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getGameTrick();
  }

getGame(): void {
  this.getGameFromDB(2)
}
getGameTrick(): void {
  this._restApiService.getGamesFromDB()
    .then(games => {
      this.game = games[1];
      console.log("homevideo3")
    }) 
}

getGameFromDB(id: number):void {
  this._restApiService.getGameFormDB(id)
  .then(game => this.game = game[0])
}

}
