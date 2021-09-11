import { Routes } from "@angular/router";
import { GameDetailsComponent } from "../features/game-details/game-details.component";
import { GameDetailsResolver } from "../features/game-details/game-details.resolver";
import { GamesListComponent } from "../features/games-list/games-list.component";
import { GamesListResolver } from './../features/games-list/games-list.resolver.service';

export const routes: Routes = [

    {path:'games/search/:searchQuery', component:GamesListComponent , resolve:{searchResults:GamesListResolver}},

    {path:'games', component:GamesListComponent, resolve:{games:GamesListResolver}},

    {path:'games/sort/:ordering', component:GamesListComponent, resolve:{orderedGames:GamesListResolver}},

    {path:'games/:id', component:GameDetailsComponent, resolve:{game:GameDetailsResolver}},
    
    {path: '', redirectTo: '/games', pathMatch: 'full'}
]

