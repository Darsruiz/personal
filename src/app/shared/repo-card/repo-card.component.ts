import { Component, Input, OnInit } from '@angular/core';
import { IRepository } from 'src/app/interfaces/repository';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {

  @Input() repo: IRepository | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
