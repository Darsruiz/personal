import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  currentTab: Observable<number> | undefined;
  isFooterHidden: Observable<boolean> | undefined
  ngOnInit(): void {
    this.currentTab = this.sharedService.currentTab$;
    this.isFooterHidden = this.sharedService.isFooterHidden$
  }
}
