import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-employee-counter',
    templateUrl: './employeeCounter.component.html',
    styleUrls: ['./employeeCounter.component.css']
})
export class EmployeeCounterComponent {
    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue)
    }
}