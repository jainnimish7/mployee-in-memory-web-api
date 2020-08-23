import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {
  @Input() title: string;
  @Input() items = [];
  @Input() placeholderValue: string;

  @Output() filterEmployee: EventEmitter<any> = new EventEmitter();

  selectedValue = [];

  constructor() {
  }

  getSelectedValues() {
    this.filterEmployee.emit({ title: this.title.toLowerCase(), value: this.selectedValue });
  }
}
