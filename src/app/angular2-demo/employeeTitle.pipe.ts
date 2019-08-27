import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'employeePipe'
})
export class EmployeeTitlePipe implements PipeTransform {
    transform(value: string, gender: string): string {
        if (gender === 'Male') {
            return 'Mr. ' + value;
        } else {
            return 'Miss. ' + value;
        }
    }
}