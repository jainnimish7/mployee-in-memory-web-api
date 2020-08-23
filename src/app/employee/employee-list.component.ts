import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SharedService } from '../services/shared.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})

export class EmployeeListComponent implements OnInit {
  allEmployees: any = [];

  searchTextChanged: Subject<string> = new Subject<string>();

  public searchKeyword = '';
  constructor(private dialog: MatDialog, private sharedService: SharedService) { }

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
    this.sharedService.getEmployees().subscribe(res => {
      this.allEmployees = res;
    });
  }

  // Open dialog to show employee details
  displayEmployeeDetails(employee: Employee) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Employee Details',
        empObj: employee
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }
}
