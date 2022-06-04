import { Component, Input, OnInit } from '@angular/core';
import { IRepository } from 'src/app/interfaces/repository';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {

  @Input()
  repo!: IRepository;
  constructor() { }

  ngOnInit(): void {
  }

  returnValidUrl(repo: IRepository): string {
    if (typeof repo.homepage === "string") {
      return repo.homepage;
    }
    else {
      return repo.html_url;
    }
  }
}
