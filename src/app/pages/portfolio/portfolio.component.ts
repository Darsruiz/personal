import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepository } from 'src/app/interfaces/repository';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  repos: Observable<IRepository[]> | undefined
  currentTab: Observable<number> | undefined;
  isFooterHidden: Observable<boolean> | undefined

  ngOnInit(): void {
    this.repos = this.apiService.getRepos();
  }

}
