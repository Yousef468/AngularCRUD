import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  panelTitle: string;
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    phoneNumber: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };
  showPreview = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  // tslint:disable-next-line:variable-name
  constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
         {
           containerClass: 'theme-dark-blue'
           // dateInputFormat: 'DD/MM/YYYY'
         });
   }

  gender = 'male';
  contactPreference = 'email';
  isActive = true;
  department = '4';
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'}
  ];

  ngOnInit() {
    this.route.paramMap.subscribe((parameterMap) => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }
  getEmployee(id: number) {
    if (id === 0 ) {
      this.employee = {
          id: null,
          name: null,
          gender: null,
          email: null,
          contactPreference: null,
          dateOfBirth: null,
          department: 'select',
          isActive: null,
          phoneNumber: null,
          photoPath: null,
          password: null,
          confirmPassword: null
        };
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm.reset();
      } else {
        this.panelTitle = 'Edit Employee';
        // this.employee = Object.assign({}, this._employeeService.getEmployee(id));
        this._employeeService.getEmployee(id).subscribe(
          (data: Employee) => {
            this.employee = data;
          },
          (error: any) => console.log(error)
        );
      }
    }

  saveEmployee(): void {
    // const newEmployee: Employee = Object.assign({}, this.employee);
    if (this.employee.id == null) {
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this.createEmployeeForm.reset();
          this.router.navigate(['/list']);
        },
        (error: any) => console.log(error)
      );
    } else {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
         this.createEmployeeForm.reset();
         this.router.navigate(['/list']) ;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
    // this._employeeService.saveEmployee(newEmployee);
    // this.createEmployeeForm.reset();
    // this.router.navigate(['/list']);
  }
ShowPreview() {
  this.showPreview = !this.showPreview;
}
}
