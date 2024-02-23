import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

interface Planet {
  name: string;
  climate: string;
  population: string;
  terrain: string;
  residents: string[];
}

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  initialPlanetsToShow: number = 3;
  totalPlanets: number = 0;
  nextPage: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchPlanets();
  }

  fetchPlanets() {
    this.apiService.fetchPlanets().subscribe(
      (response: any) => {
        this.planets = response.results.slice(0, this.initialPlanetsToShow).map((result: any) => ({
          name: result.name,
          climate: result.climate,
          population: result.population,
          terrain: result.terrain,
          residents: result.residents
        }));
        this.totalPlanets = response.results.length;
        this.nextPage = response.next;
      },
      (error: any) => {
        console.error('Error fetching planets:', error);
      }
    );
  }

  loadMorePlanets() {
    if (this.nextPage) {
      this.apiService.fetchMorePlanets(this.nextPage).subscribe(
        (response: any) => {
          const newPlanets = response.results.slice(0, this.initialPlanetsToShow).map((result: any) => ({
            name: result.name,
            climate: result.climate,
            population: result.population,
            terrain: result.terrain,
            residents: result.residents
          }));
          this.planets = [...this.planets, ...newPlanets];
          this.nextPage = response.next;
        },
        (error: any) => {
          console.error('Error fetching more planets:', error);
        }
      );
    }
  }
}
