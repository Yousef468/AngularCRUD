import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CreateEmployeeCanDeactivateGuard } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeesDetailsComponent } from './employees/employees-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';
import { Angular2DemoComponent } from './angular2-demo/angular2-demo.component';
import { EmployeeTitlePipe } from './angular2-demo/employeeTitle.pipe';
import { EmployeeCounterComponent } from './angular2-demo/employeeCounter.component';


const appRoutes: Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent,
    resolve: {employeeList: EmployeeListResolverService}
  },
  {
    path: 'edit/:id',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuard]
  },
  { path: 'employees/:id', component: EmployeesDetailsComponent, canActivate: [EmployeeDetailsGuardService]},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'Angular2Demo', component: Angular2DemoComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'notfound', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    LifecycleComponent,
    EmployeesDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    Angular2DemoComponent,
    EmployeeTitlePipe,
    EmployeeCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuard, EmployeeListResolverService, EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
