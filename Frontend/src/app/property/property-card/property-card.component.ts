import { Component, Input } from "@angular/core";
import { IPropertyBase } from "src/app/model/ipropertybase";

@Component({
    selector : 'app-property-card',
    // template :`<h1>I am a card</h2>`
    templateUrl : './property-card.component.html',
    // styles : ['h1 {font-weight: normal;}']
    styleUrls : ['./property-card.component.css']
})

export class PropertyCardComponent{
    @Input() Property : IPropertyBase;
    @Input() hideIcons : boolean;

}