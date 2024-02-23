import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

interface Resident {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {
  @Input() residentUrl: string = '';
  resident: Resident | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    if (this.residentUrl) {
      this.fetchResident(this.residentUrl);
    }
  }

  fetchResident(residentUrl: string) {
    this.apiService.fetchResident(residentUrl).subscribe(
      (response: any) => {
        this.resident = {
          name: response.name,
          height: response.height,
          mass: response.mass,
          gender: response.gender
        };
      },
      (error: any) => {
        console.error('Error fetching resident:', error);
      }
    );
  }
}
