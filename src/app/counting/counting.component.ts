import { Component } from '@angular/core';

@Component ({
    selector: 'app-counting',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})

export class countingComponent{
    count: number = 0; //Property
    countNumber(){ //Method
        this.count ++; //this is ref all object in class
    }    
}
