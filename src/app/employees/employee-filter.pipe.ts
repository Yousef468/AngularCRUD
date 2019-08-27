import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
    name: 'filterEmployee',
    pure: false
})
export class EmployeeFilterPipe implements PipeTransform {
    counter = 1;
    transform(employees: Employee[], searchTerm: string): Employee[] {
        this.counter++;
        // console.log('The impure pipe executed : ' + this.counter);
        if (!employees || !searchTerm) {
            return employees;
        }
        return employees.filter(employee =>
            employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
