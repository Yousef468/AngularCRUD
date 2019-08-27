import { Component, OnInit } from '@angular/core';
import { IEmployee, Employee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-angular2-demo',
  templateUrl: './angular2-demo.component.html',
  styleUrls: ['./angular2-demo.component.css'],
  providers: [EmployeeService]
})
export class Angular2DemoComponent implements OnInit {
  firstName = 'Yousef';
  lastName = 'Jamali';
  age = '38';
  showDetails = true;
  name: string = 'Tom';
  employees: Employee[];
  selectedEmployeeCountRadioButton: string = 'All';
  constructor(private employeeService: EmployeeService) {}

   onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
      this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
   }

   getTotalEmployeeCount() {
     return this.employees.length;
   }
   getTotalMaleEmployeeCount() {
     return this.employees.filter(e => e.gender === 'Male').length;
   }
   getTotalFemaleEmployeeCount() {
     return this.employees.filter(e => e.gender === 'Female').length;
   }
  //  getEmployees(): void {
  //     this.employees  = [
  //       {code: 'emp101', name: 'Yousef', gender: 'Male', salary: '5500', dateOfBirth: '25/06/1988'},
  //       {code: 'emp102', name: 'Avina', gender: 'Female', salary: '1500', dateOfBirth: '22/06/1978'},
  //       {code: 'emp103', name: 'Motahareh', gender: 'Female', salary: '2300', dateOfBirth: '5/02/1900'},
  //       {code: 'emp104', name: 'Rasta', gender: 'Female', salary: '2300', dateOfBirth: '5/02/1900'},
  //       {code: 'emp105', name: 'Ali', gender: 'Male', salary: '3300', dateOfBirth: '5/02/1900'}
  //     ];
  //  }

   trackByEmpCode(index: number, employee: any): string {
      return employee.code;
   }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  onToggleClick() {
    this.showDetails = !this.showDetails;
  }

}
