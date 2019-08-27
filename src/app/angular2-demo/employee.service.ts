import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

Injectable();
export class EmployeeService {
    getEmployees(): IEmployee[] {
        return [
              {code: 'emp101', name: 'Yousef', gender: 'Male', salary: '5500', dateOfBirth: '25/06/1988'},
              {code: 'emp102', name: 'Avina', gender: 'Female', salary: '1500', dateOfBirth: '22/06/1978'},
              {code: 'emp103', name: 'Motahareh', gender: 'Female', salary: '2300', dateOfBirth: '5/02/1900'},
              {code: 'emp104', name: 'Rasta', gender: 'Female', salary: '2300', dateOfBirth: '5/02/1900'},
              {code: 'emp105', name: 'Ali', gender: 'Male', salary: '3300', dateOfBirth: '5/02/1900'},
              {code: 'emp106', name: 'Sara', gender: 'Female', salary: '3300', dateOfBirth: '5/02/1900'}
        ];
    }
}
