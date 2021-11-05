import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  register(user: any) {
    user.maNhom = 'GP01';
    this.dataService.registerUser(user).subscribe((result) => {
      console.log(result);
    });
  }
}
