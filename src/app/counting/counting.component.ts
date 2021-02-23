import { Component } from '@angular/core';

@Component ({
    selector: 'app-counting',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})

export class countingComponent{
    title:string;
    count = 0;
    
    constructor() {

    }
    
    countNumber() {
        this.count = this.count + 1;
    }
}