import { CharacterService } from '@app/shared/services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';
import { Observable, take } from 'rxjs';
import { Location } from "@angular/common";

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character> | undefined;

  constructor(private route:ActivatedRoute, private characterSvc:CharacterService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }

  onGoBack(): void{
    this.location.back();
  }
}
