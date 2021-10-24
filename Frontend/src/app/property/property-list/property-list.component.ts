import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : IPropertyBase[];
  SellRent = 1;
  Today = new Date();
  City = '' ;
  SearchCity = '';
  SortbyParam = '';
  SortDirection ='asc';

  constructor(private route : ActivatedRoute ,
              private housingService : HousingService ) { }

    onClickFilter()
    {
      this.SearchCity = this.City;
    }
    onClearFilter()
    {
      this.SearchCity = '';
      this.City = '';

    }
    onSortDirection(){
      if(this.SortDirection ==='desc')
      {
        this.SortDirection  ='asc';
      }else{
        this.SortDirection ='desc';
      }
    }
  ngOnInit(): void {
  if(this.route.snapshot.url.toString()) {
    this.SellRent = 2; // Means we are rent-property URL else we ara on base URL
  };
   this.housingService.getAllproperties(this.SellRent).subscribe(
     data => {
       this.properties = data;
       console.log(data);
    
     }, error => {
       console.log('httperror');
       console.log(error);
     }
   );

  }
  }

