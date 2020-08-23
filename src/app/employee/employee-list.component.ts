import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})

export class EmployeeListComponent implements OnInit {
  allEmployees = [];

  searchTextChanged: Subject<string> = new Subject<string>();

  public searchKeyword = '';
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllEmployees();
    this.searchTextChanged.pipe(debounceTime(1000))
      .subscribe(model => this.searchByName());
  }

  search() {
    this.searchTextChanged.next();
  }

  // searching by employee's name
  searchByName() {
    if (this.searchKeyword) {
      this.allEmployees = this.allEmployees.filter(employee => employee.name.toLowerCase().includes(this.searchKeyword));
    } else {
      this.getAllEmployees();
    }
  }

  // get list of all employees
  getAllEmployees() {
    this.allEmployees = [];
  }
}
