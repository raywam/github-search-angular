import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  @Output() getUserEmmiter = new EventEmitter<string>();

  value: string = '';

  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    if (this.value !== '') {
      this.getUserEmmiter.emit(this.value);
    }
  }

}
