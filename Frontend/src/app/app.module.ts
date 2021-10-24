import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes ,  RouterModule } from '@angular/router';
import {FormsModule , ReactiveFormsModule}  from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { Navbar } from './nav-bar/navbar.component';
import { HousingService } from './services/housing.service';


import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent} from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { PropertyDetailsResolverService } from './property/property-details/property-details-resolver-service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';

const appRoutes : Routes = [
  {path : '', component : PropertyListComponent},
  {path : 'rent-property', component : PropertyListComponent},
  {path : 'add-property', component : AddPropertyComponent},
  {path : 'property-details/:id', component : PropertyDetailsComponent , resolve  : {prp : PropertyDetailsResolverService}},
  {path : 'user/login', component : UserLoginComponent},
  {path : 'user/register', component :   UserRegisterComponent},

  {path : '**', component : PropertyListComponent}

] 


@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    Navbar,
    AddPropertyComponent,
    PropertyDetailsComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule 

  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertifyService,
    AuthService,
    PropertyDetailsResolverService
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
