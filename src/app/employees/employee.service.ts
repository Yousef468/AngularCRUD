import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Employees } from '../models/employees.model';
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError, map } from 'rxjs/operators';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';



@Injectable()
export class EmployeeService {
    baseUrl = 'http://localhost:3000/employees';
    private listEmployeeses: Employees[] = [];
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@gmail.com',
            dateOfBirth: new Date('10/25/1988'),
            department: '3',
            isActive: true,
            photoPath: '../../assets/images/mark.png'
          },
          {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 23456789,
            dateOfBirth: new Date('11/10/1979'),
            department: '2',
            isActive: true,
            photoPath: '../../assets/images/mary.png'
          },
          {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 54325878,
            dateOfBirth: new Date('11/10/1976'),
            department: '3',
            isActive: false,
            photoPath: '../../assets/images/john.png'
          }
    ];
     constructor(private http: HttpClient) {
     }
    getEmployees(): Observable<Employee[]> {
        // return of(this.listEmployees).pipe(
        //   delay(2000)
        // );
        return this.http.get<Employee[]>(this.baseUrl).pipe(
           catchError(this.handleError)
        );
    }
    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
          console.error('Client side error: ', errorResponse.error.message);
        } else {
          console.error('Server side error: ', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it.Please try again later.');
    }
    getEmployeeses(): Observable<Employees[]> {
      return this.http.get<Employees[]>('http://localhost:13499/Api/Employees');
    }
    getEmployee(id: number): Observable<Employee> {
      // return this.listEmployees.find(e => e.id === id);
      return this.http.get<Employee>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
    }
    addEmployee(employee: Employee): Observable<Employee> {
      // if (employee.id === null) {
        // const maxId = this.listEmployees.reduce(function(e1 , e2) {
        //   return (e1.id > e2.id) ? e1 : e2;
        // }).id;
        // employee.id = maxId + 1;
        // this.listEmployees.push(employee);
        return this.http.post<Employee>(this.baseUrl, employee, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }).pipe(catchError(this.handleError));
      // } else {
      //   const employeeIndex = this.listEmployees.findIndex(emp => emp.id === employee.id);
      //   this.listEmployees[employeeIndex] = employee;
      // }
    }

    updateEmployee(employee: Employee): Observable<void> {
        return this.http.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        })
        .pipe(catchError(this.handleError));
    }

    getEmployeesArrayLenght() {
      return this.listEmployees.length;
    }
    deleteEmployee(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
      // const i = this.listEmployees.findIndex(e => e.id === id);
      // if (i !== -1) {
      //   this.listEmployees.splice(i, 1);
      // }
    }
}
