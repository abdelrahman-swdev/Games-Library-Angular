import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { GamesService } from './../../services/games.service';

@Injectable()
export class GamesListResolver implements Resolve<any> {

    constructor(private gameService: GamesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(route.params['searchQuery']) {
            return this.gameService.getAll(route.params['searchQuery']);
        } else if(route.params['ordering']) {
            return this.gameService.getAll('', route.params['ordering']);
        } else{
            return this.gameService.getAll();
        }
    }
    
}