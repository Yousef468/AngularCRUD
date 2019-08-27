import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
    constructor(private _employeeService: EmployeeService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        // const employeeExist = !!this._employeeService.getEmployee(+route.paramMap.get('id'));
       return this._employeeService.getEmployee(+route.paramMap.get('id')).pipe(
           map(employee => {
               const employeeExist = !!employee;
               if (employeeExist) {
                   return true;
               } else {
                   this.router.navigate(['notfound']);
                   return false;
               }
           }), catchError((err) => {
            console.log(err);
            return of(false);
        })
       );
    }

}
