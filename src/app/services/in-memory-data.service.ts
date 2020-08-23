import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const employees = [
      { id: 1, name: 'John Smith', designation: 'UI Specialist', technology: 'Figma', skill: 'UX', location: 'Indore', relocate: 'Yes' },
      { id: 2, name: 'Mark Miller', designation: 'Lead UI Specialist', technology: 'Figma', skill: 'UX', location: 'Indore', relocate: 'Yes' },
      { id: 3, name: 'Jennifer Parker', designation: 'Senior UI Specialist', technology: 'XD', skill: 'UX', location: 'Indore', relocate: 'Yes' },
      { id: 4, name: 'Thomas Hall', designation: 'Associate UI Specialist', technology: 'XD', skill: 'UX', location: 'Indore', relocate: 'Yes' },
    ];
    return { employees };
  }
}
