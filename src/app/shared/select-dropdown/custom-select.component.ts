import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html'
})
export class CustomSelectComponent {
  @Input() title: string;
  @Input() items = [];
  @Input() placeholderValue: string;

  @Output() filterEmployee: EventEmitter<any> = new EventEmitter();

  selectedValue = [];

  constructor() {
  }

  // Emit selected values to parent component
  getSelectedValues() {
    this.filterEmployee.emit({ title: this.title.toLowerCase(), value: this.selectedValue });
  }
}
