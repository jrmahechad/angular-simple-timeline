import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public items = [
    {
      text: 'First Year',
      active: true
    },
    {
      text: 'Second Year',
      active: true,
      flipped: true
    },
    {
      text: 'Third Year'
    },
    {
      text: 'Fourth Year',
      flipped: true
    },
    {
      text: 'Fifth Year'
    }
  ];

  constructor() {}

  ngOnInit() {}

  checkPrevItemActive(index) {
    const prevIndex = index - 1;
    return prevIndex > -1 ? this.items[prevIndex].active && this.items[index].active : false;
  }

  checkNextItemActive(index) {
    const nextIndex = index + 1;
    return this.items[nextIndex]  ? this.items[nextIndex].active : false;
  }

  isLastItem(index) {
    return index === this.items.length - 1;
  }

  isFirstItem(index) {
    return index === 0;
  }
}
