import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../Services/owner.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-owner',
  standalone: false,
  templateUrl: './edit-owner.component.html',
  styleUrl: './edit-owner.component.css'
})
export class EditOwnerComponent implements OnInit {
    id : number = 0;//Id that we are extracting from the URL..
    owner : any = {};

    constructor(private service : OwnerService,private  activedRoute : ActivatedRoute) {
      
    }
  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe((parameters : ParamMap) => {
      this.id = parseInt(parameters.get("id")!);
      this.service.getOwner(this.id).subscribe(data => this.owner = data);
    })
  }
}
