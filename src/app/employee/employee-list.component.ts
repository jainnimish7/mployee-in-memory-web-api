import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SharedService } from '../services/shared.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})

export class EmployeeListComponent implements OnInit {
  allEmployees: any = [];
  filteredEmployees: any = [];

  locations = ['Indore', 'Pune', 'Mumbai', 'Bangalore'];
  technologies = ['XD', 'Photoshop', 'Figma', 'Sketch'];
  skills = ['Angular', 'UX Design', 'UI Development', 'GraphQL'];
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
    });
  }

  // Open dialog to show employee details
  displayEmployeeDetails(employee: Employee) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Employee Details',
        empObj: employee,
      },
      width: '500px',
      height: '350px',
    });

    dialogRef.afterClosed().subscribe();
  }

  getFilteredItems(event) {
    this.filteredObj[event.title] = [];
    this.filteredObj[event.title] = event.value;
  }

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
}
