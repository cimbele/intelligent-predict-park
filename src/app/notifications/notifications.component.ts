import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

declare var $: any;
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

interface mapdata {
	sname: string;
	miles: number;
    parking?: number;
    predication?:number
}
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
    lat: number = 32.7137006;
    lng: number = -117.1566807;
    zoom: number = 15;
    toggle : boolean = false

    markers: marker[] = [
        {
            lat: 32.7137006,
            lng: -117.1566807,
            label: '10',
            draggable: true
        },
        {
            lat: 32.7136890,
            lng: -117.1586858,
            label: '5',
            draggable: false
        },
        {
            lat: 32.7136854,
            lng: -117.1597512,
            label: '3',
            draggable: true
        }
    ]

    mapData: mapdata[] = [
        {
            sname: '1st Street',
            miles: 2,
            parking: 10,
            predication:80
        },
        {
            sname: '2ed Ave',
            miles: 1.5,
            parking: 2,
            predication:60
        },
        {
            sname: 'Elm Street',
            miles: 2.5,
            parking: 10,
            predication:50
        },
    ]
  constructor() { 
    var numbers = Observable.timer(1000); // Call after 10 second.. Please set your time
    Observable.interval(30 * 60).subscribe(x =>{
        this.toggle == true ? false : true;
        if(this.toggle){
                this.mapData = [
                {
                    sname: '1st Street',
                    miles: 2,
                    parking: 5,
                    predication:40
                },
                {
                    sname: '2ed Ave',
                    miles: 1.5,
                    parking: 2,
                    predication:60
                },
                {
                    sname: 'Elm Street',
                    miles: 2.5,
                    parking: 10,
                    predication:50
                },
            ];
            this.mapData[0].predication = Math.floor(Math.random() * 80) + 10;
            if(this.mapData[0].predication <80){
                this.mapData[0].predication = 82;
            }
            this.mapData[0].sname = (Math.floor(Math.random() * 10)+4) + 'th Street';
            this.mapData[0].miles = Math.floor(Math.random() * 10)+1;
            this.mapData[0].parking = Math.floor(Math.random() * 10)+1;

            this.mapData[1].predication = Math.floor(Math.random() * 70) + 10;
            this.mapData[1].miles = Math.floor(Math.random() * 10)+1;
            this.mapData[1].parking = Math.floor(Math.random() * 10)+1;
            this.mapData[1].sname = (Math.floor(Math.random() * 10)+4) + 'th Ave';

            this.mapData[2].predication = Math.floor(Math.random() * 40) + 10;
            this.mapData[2].miles = Math.floor(Math.random() * 10)+1;
            this.mapData[2].parking = Math.floor(Math.random() * 10)+1;
            this.mapData[3].sname = (Math.floor(Math.random() * 10)+4) + 'th Street';

        }else{
            this.mapData = [
                {
                    sname: '8st Street',
                    miles: 2,
                    parking: 10,
                    predication:60
                },
                {
                    sname: '2ed Ave',
                    miles: 1.5,
                    parking: 2,
                    predication:40
                },
                {
                    sname: 'Grape Street',
                    miles: 2.5,
                    parking: 10,
                    predication:30
                },
            ];
            this.mapData[0].predication = Math.floor(Math.random() * 80) + 10;
            if(this.mapData[0].predication <80){
                this.mapData[0].predication = 82;
            }
            this.mapData[0].miles = Math.floor(Math.random() * 10)+1;
            this.mapData[0].parking = Math.floor(Math.random() * 10)+1;
            this.mapData[0].sname = (Math.floor(Math.random() * 10)+4) + 'th Ave';

            this.mapData[1].predication = Math.floor(Math.random() * 70) + 10;
            this.mapData[1].miles = Math.floor(Math.random() * 10)+1;
            this.mapData[1].parking = Math.floor(Math.random() * 10)+1;
            this.mapData[1].sname = (Math.floor(Math.random() * 10)+4) + 'th Street';

            this.mapData[2].predication = Math.floor(Math.random() * 40) + 10;
            this.mapData[2].miles = Math.floor(Math.random() * 10)+1;
            this.mapData[2].parking = Math.floor(Math.random() * 10)+1;
            this.mapData[2].sname = (Math.floor(Math.random() * 10)+4) + 'th Ave';
        }
        if(this.toggle){
            this.lat = 32.9137006;
            this.lng = -117.1566807;
            this.markers =[
                {
                    lat: 32.9137006,
                    lng: -117.1566807,
                    label: '10',
                    draggable: true
                },
                {
                    lat: 32.9136890,
                    lng: -117.1586858,
                    label: '5',
                    draggable: false
                },
                {
                    lat: 32.9136854,
                    lng: -117.1597512,
                    label: '3',
                    draggable: true
                }
            ];
        }else{
            this.lat = 32.7156105;
            this.lng = -117.1580049;
            this.markers = [
                {
                    lat: 32.7186105 ,
                    lng: -117.1580049,
                    label: '10',
                    draggable: true
                },
                {
                    lat: 32.7159105 ,
                    lng: -117.1580049,
                    label: '5',
                    draggable: false
                },
                {
                    lat: 32.7154105 ,
                    lng: -117.1580049,
                    label: '3',
                    draggable: true
                }
            ];
        }
        
    });
  }
  ngOnInit() {
  }

}
