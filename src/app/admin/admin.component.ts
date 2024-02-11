import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector:'admin-component',
    templateUrl:'./admin.component.html',
    styleUrls:['admin.component.scss']
})

export class AdminComponent implements OnInit {
    constructor(
    ) {
    }

    ngOnInit() {
        console.log('from admin');
        
    }
}