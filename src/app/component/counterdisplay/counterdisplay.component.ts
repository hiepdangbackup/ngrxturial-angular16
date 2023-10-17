import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { getcounter } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css'],
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{ counter: CounterModel }>) {}

  counterdisplay!: number;
  channelname = '';
  countersubcribe!: Subscription;
  counter$!: Observable<CounterModel>;
  ngOnInit(): void {
    this.countersubcribe = this.store.select(getcounter).subscribe((data) => {
      this.counterdisplay = data;
      console.log('counter display');
    });
  }

  ngOnDestroy(): void {
    if (this.countersubcribe) {
      this.countersubcribe.unsubscribe();
    }
  }
}
