import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const employees = [
      { id: 1, name: 'John Smith', designation: 'UI Specialist', technology: 'Photoshop', skill: 'Angular', location: 'Bangalore', relocate: 'Yes' },
      { id: 2, name: 'Mark Miller', designation: 'Lead UI Specialist', technology: 'Photoshop', skill: 'GraphQL', location: 'Pune', relocate: 'Yes' },
      { id: 3, name: 'Jennifer Parker', designation: 'Senior UI Specialist', technology: 'XD', skill: 'UX Design', location: 'Delhi', relocate: 'Yes' },
      { id: 4, name: 'Thomas Hall', designation: 'Associate UI Specialist', technology: 'Figma', skill: 'Visual ', location: 'Indore', relocate: 'No' },
      { id: 5, name: 'Ronald Baker', designation: 'Senior Lead UI Specialist', technology: 'XD', skill: 'Javascript', location: 'Indore', relocate: 'No' },
      { id: 6, name: 'Susan Carter', designation: 'UI Specialist', technology: 'Figma', skill: 'Testing', location: 'Pune', relocate: 'No' },
      { id: 7, name: 'Sarah White', designation: 'Associate UI Specialist', technology: 'Sketch', skill: 'UX', location: 'Bangalore', relocate: 'No' },
    ];
    return { employees };
  }
}
