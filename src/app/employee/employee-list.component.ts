import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SharedService } from '../services/shared.service';
import { Employee } from '../model/employee';
import * as _ from 'lodash';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})

export class EmployeeListComponent implements OnInit {
  allEmployees: any = [];
  filteredEmployees: any = [];

  locations = [];
  technologies = [];
  skills = [];
  filteredObj = { location: [], technology: [], skills: [] };

  constructor(private dialog: MatDialog, private sharedService: SharedService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  // get list of all employees
  getAllEmployees() {
    this.sharedService.getEmployees().subscribe(res => {
      this.allEmployees = res;
      this.filteredEmployees = res;
      this.locations = _.uniq(_.map(this.allEmployees, 'location'));
      this.skills = _.uniq(_.map(this.allEmployees, 'skill'));
      this.technologies = _.uniq(_.map(this.allEmployees, 'technology'));
    });
  }

  // Open dialog to show employee details
  displayEmployeeDetails(employee: Employee) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Employee Details',
        empObj: employee,
      },
      width: '650px',
      height: '380px',
    });

    dialogRef.afterClosed().subscribe();
  }

  // Getting filtered options from select box
  getFilteredOptions(event) {
    this.filteredObj[event.title] = event.value;
  }

  // filtering employees on click of apply button
  applyFilter() {
    if (this.filteredObj.technology.length || this.filteredObj.location.length || this.filteredObj.skills.length) {
      this.filteredEmployees = this.allEmployees.filter(emp =>
        this.filteredObj.technology.includes(emp.technology) ||
        this.filteredObj.location.includes(emp.location) ||
        this.filteredObj.skills.includes(emp.skill)
      );
    } else {
      this.filteredEmployees = this.allEmployees;
    }
  }

  // Check all checkboxes
  checkAll(event) {
    this.filteredEmployees.forEach(x => x.state = event.target.checked);
  }

  // Checking if all checkboxes are checked or not
  isAllChecked() {
    return this.filteredEmployees.every(_ => _.state);
  }
}
