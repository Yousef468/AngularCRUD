import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Employees } from '../models/employees.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ResolvedEmployeeList } from './resolved-employeelist.model';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  private _searchTerm: string;
  filteredEmployees: Employee[] = [];

  get searchTerm() {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filtereEmployees(value);
  }

  filtereEmployees(searchText: string) {
    if (searchText === undefined) {
      return this.employees;
    }
    return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 );
  }
  // newEmployeesArray: Employees[] = [];
  employees: Employee[] = [];
  employee: Employee;
  error: string = '';
  // dataFromChild: Employee;
  // indexArray = 1;
  // userName = '';
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router,
              private _route: ActivatedRoute) {
                const resolvedDate: Employee[] | string = this._route.snapshot.data.employeeList;
                if (Array.isArray(resolvedDate)) {
                  this.employees = resolvedDate;
                } else {
                  this.error = resolvedDate;  
                }
                if (this._route.snapshot.queryParamMap.has('searchTerm')) {
                  this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
                } else {
                  this.filteredEmployees = this.employees;
                  // console.log('Else Block executed in : ' + new Date().toTimeString());
                }
              }

  ngOnInit() {
    // this._employeeService.getEmployees().subscribe(
    //   (empList) => {
    //     this.employees = empList;
    //     console.log('Subscribe executed : ' + new Date().toTimeString());
    //     if (this._route.snapshot.queryParamMap.has('searchTerm')) {
    //         this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    //       } else {
    //         this.filteredEmployees = this.employees;
    //         console.log('Else Block executed in : ' + new Date().toTimeString());
    //       }
    //   }
    // );
    // console.log(this._route.snapshot.queryParamMap.get('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.getAll('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.has('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.keys);
    // console.log(this._route.snapshot.paramMap.get('id'));
    // this.employee = this.employees[0];
    // this._employeeService.getEmployeeses().subscribe(
    //   (response: any) => {
    //     this.newEmployeesArray = response;
    //   }
    // );
  }

  onDeleteNotification(id: number) {
    const i = this.filteredEmployees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.filteredEmployees.splice(i , 1);
    }
  }

  // changeTheEmployeeName() {
  //   this.employees[0].name = 'Jason';
  //   this.filteredEmployees = this.filtereEmployees(this.searchTerm);
  //   // const newEmployees: Employee[] = Object.assign([], this.employees);
  //   // newEmployees[0].name = 'Jason';
  //   // this.employees = newEmployees;
  // }

  // onMouseMove() {

  // }

  // onClick(employeeId: number) {

  // }

  // handleNotify(evenetData: Employee) {
  //   this.dataFromChild = evenetData;
  // }

  // nextEmployee() {
  //   if (this.indexArray <= 2) {
  //     this.employee = this.employees[this.indexArray];
  //     this.indexArray++;
  //   } else {
  //     this.employee = this.employees[0];
  //     this.indexArray = 1;
  //   }
  // }
}
