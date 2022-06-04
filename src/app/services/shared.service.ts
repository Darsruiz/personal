import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private currentTab: number = 1;
  private currentTabObs: BehaviorSubject<number> = new BehaviorSubject<number>(this.currentTab);
  currentTab$: Observable<number> = this.currentTabObs.asObservable();
  constructor() { }

  setCurrentTab(id: number) {
    this.currentTab = id;
    this.currentTabObs.next(this.currentTab)
  }
}
