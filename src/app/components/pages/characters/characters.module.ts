import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharactersListComponent } from '@characters/characters-list/characters-list.component';
import { CharacterDetailsComponent } from '@characters/characters-details/characters-details.component';
import { CharacterComponent } from '@characters/character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const myComponents = [CharacterDetailsComponent, CharactersListComponent, CharacterComponent];

@NgModule({
    declarations: [...myComponents],
    exports: [...myComponents],
    imports: [CommonModule, RouterModule, InfiniteScrollModule]
})
export class CharactersModule {}
;

