import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;
  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService,
              private _router: Router) { }

  ngOnInit() {
  //   this._id = +this._activatedRoute.snapshot.paramMap.get('id');
  //   this.employee = this._employeeService.getEmployee(this._id);
  //  console.log(this._activatedRoute);
    this._activatedRoute.paramMap.subscribe(
      (params) => {
        this._id = +params.get('id');
        this._employeeService.getEmployee(this._id).subscribe(
          (employee) => {
            this.employee = employee;
          },
          (error: any) => console.log(error)
        );
      }
    );
  }

  viewNextEmployee() {
    if (this._id < this._employeeService.getEmployeesArrayLenght()) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }
    this._router.navigate(['/employees', this._id]);
  }

  viewPreviousEmployee() {
    if (this._id === 1) {
      this._id = this._employeeService.getEmployeesArrayLenght();
    } else {
      this._id = this._id - 1;
    }
    this._router.navigate(['/employees', this._id]);
  }
}
