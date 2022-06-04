import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private currentTab: number = 1;
  private currentTabObs: BehaviorSubject<number> = new BehaviorSubject<number>(this.currentTab);
  currentTab$: Observable<number> = this.currentTabObs.asObservable();

  private isFooterHidden: boolean = false;
  private isFooterHiddenObs: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isFooterHidden);
  isFooterHidden$: Observable<boolean> = this.isFooterHiddenObs.asObservable();

  constructor() { }

  setCurrentTab(id: number) {
    this.currentTab = id;
    this.currentTabObs.next(this.currentTab);

    this.isFooterHidden = true;
    this.isFooterHiddenObs.next(this.isFooterHidden);
  }
}
