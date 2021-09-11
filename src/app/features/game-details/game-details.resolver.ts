import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { GamesService } from './../../services/games.service';

@Injectable({providedIn:'root'})
export class GameDetailsResolver implements Resolve<any> {

    constructor(private gameService:GamesService){}

    resolve(route: ActivatedRouteSnapshot) {
        return this.gameService.getById(route.params['id']);
    }

}