import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { GamesListComponent } from './features/games-list/games-list.component';
import { GameThumbnailComponent } from './features/game-thumbnail/game-thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesService } from './services/games.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';
import { GameDetailsComponent } from './features/game-details/game-details.component';
import { GameDetailsResolver } from './features/game-details/game-details.resolver';
import { GamesListResolver } from './features/games-list/games-list.resolver.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GamesListComponent,
    GameThumbnailComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    GamesService,
    GameDetailsResolver,
    GamesListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
