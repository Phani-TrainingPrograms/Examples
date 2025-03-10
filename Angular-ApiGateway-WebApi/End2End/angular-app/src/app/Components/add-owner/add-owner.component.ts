import { Component } from '@angular/core';
import { OwnerService } from '../../Services/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-owner',
  standalone: false,
  templateUrl: './add-owner.component.html',
  styleUrl: './add-owner.component.css'
})
export class AddOwnerComponent {
  newOwner : any = {}

  constructor(private service : OwnerService, private router: Router) {
    
  }  
  onSave(){
    this.service.addOwner(this.newOwner).subscribe((data) => alert("Onwer details are set"))
    this.router.navigate(['/']);
  }
}
