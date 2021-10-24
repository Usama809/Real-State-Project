import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';



@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

public  propertyId : number;
property = new Property();
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
              private router : Router,
              private housingService : HousingService ) { }

  ngOnInit(): void {  
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data : Property) => {
        this.property = data['prp'];
      }
    );


    // this.route.params.subscribe(
    //   (params) =>{
    //       this.propertyId = +params['id'];
    //       this.housingService.getProperty(this.propertyId).subscribe(
    //         ( data : Property) => {
    //           this.property = data;
    //        }, error => this.router.navigate(['/']) 
    //       )
    //   });
    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview : true
      },
     
    ];

    this.galleryImages = [
      {
        small: 'assets/images/internal1.png',
        medium: 'assets/images/internal1.png',
        big: 'assets/images/internal1.png'
      },
      {
        small: 'assets/images/internal2.png',
        medium: 'assets/images/internal2.png',
        big: 'assets/images/internal2.png'
      },
      {
        small: 'assets/images/internal3.png',
        medium: 'assets/images/internal3.png',
        big: 'assets/images/internal3.png'
      },
      {
        small: 'assets/images/internal4.png',
        medium: 'assets/images/internal4.png',
        big: 'assets/images/internal4.png'
      },
      {
        small: 'assets/images/internal5.png',
        medium: 'assets/images/internal5.png',
        big: 'assets/images/internal5.png'
      }
    ];
      
  }
  

}
