import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepository } from 'src/app/interfaces/repository';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private apiService: ApiService, private sharedService: SharedService) { }

  repos: Observable<IRepository[]> | undefined
  currentTab: Observable<number> | undefined;
  ngOnInit(): void {
    this.repos = this.apiService.getRepos();
    this.currentTab = this.sharedService.currentTab$;
  }
}
