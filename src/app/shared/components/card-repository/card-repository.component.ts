import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/interfaces/Repo';

@Component({
  selector: 'app-card-repository',
  templateUrl: './card-repository.component.html',
  styleUrls: ['./card-repository.component.scss']
})
export class CardRepositoryComponent implements OnInit {

  @Input() repos: Repo[];

  constructor() { }

  ngOnInit() {
  }

}
