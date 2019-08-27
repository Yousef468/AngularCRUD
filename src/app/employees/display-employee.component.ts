import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() searchTerm: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmDelete = false;
  isHidden = false;
  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  // private _employeeId: number;
  // @Input()
  // set employeeId(val: number) {
  //   console.log('employeeId changed from ' + JSON.stringify(this._employeeId) + ' to ' + JSON.stringify(val));
  //   this._employeeId = val;
  // }
  // get employeeId() {
  //   return this._employeeId;
  // }
  // private _employee: Employee;
  // @Input()
  // set employee(val: Employee) {
     // tslint:disable-next-line:max-line-length
  //   console.log('employee changed from ' + (this._employee ? JSON.stringify(this._employee.name) : 'NULL') + ' to ' + JSON.stringify(val.name));
  //   // console.log('Previus Employee:: ' + (this._employee ? this._employee.name : 'NULL') ) ;
  //   this._employee = val;
  //   // console.log('Current Employee: ' + this._employee.name);
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }
  constructor(private _route: ActivatedRoute, private _router: Router, private employeeService: EmployeeService) { }
  employeeActivatedId: number;
  ngOnInit() {
    this.employeeActivatedId = +this._route.snapshot.paramMap.get('id');
  }
  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe(
      () => console.log(`The employee with Id : ${this.employee.id} is deleted`),
      (error: any) => console.log(error)
    );
    this.notifyDelete.emit(this.employee.id);
  }
  viewEmployeeDetails() {
    this._router.navigate(['/employees', this.employee.id],
    {
      queryParams: {searchTerm: this.searchTerm}
    }
    );
  }

  editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);
  }

  // getNameAngGender(): string {
  //   return this.employee.name + ' ' + this.employee.gender;
  // }

  // clickHandle() {
  //   this.notify.emit(this.employee);
  // }
    // ngOnChanges(changes: SimpleChanges) {
    //   for (const propName of Object.keys(changes)) {
    //     // console.log(propName);
    //     const change = changes[propName];
    //     // console.log(change);
    //     const from = JSON.stringify(change.previousValue);
    //     const to = JSON.stringify(change.currentValue);
    //     console.log(propName + ' changed from ' + from + ' to ' + to);
    //   }
    // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   const previousEmployee = changes.employee.previousValue as Employee;
  //   const currentEmployee = changes.employee.currentValue as Employee;
  //   console.log('Previous Employee Name : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
  //   console.log('Current Employee Name : ' + currentEmployee.name);
  // }
}
