import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITabInfo } from 'src/app/interfaces/tab-info';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService, private sharedService: SharedService) { }

  currentTab: Observable<number> | undefined;
  tabInfo: Observable<ITabInfo[]> | undefined;
  ngOnInit(): void {
    this.tabInfo = this.apiService.getTabInfo()
    this.currentTab = this.sharedService.currentTab$
  }

  setCurrentTab(id: number) {
    this.sharedService.setCurrentTab(id);
  }
}
