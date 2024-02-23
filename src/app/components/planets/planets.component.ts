import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

interface Planet {
  name: string;
  climate: string;
  population: string;
  terrain: string;
  residents: string[];
  showResidents: boolean;
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
  prevPage: string | null = null;
  isPrevDisabled: boolean = true;
  isNextDisabled: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchPlanets();
  }

  fetchPlanets() {
    this.apiService.fetchPlanets().subscribe(
      (response: any) => {
        this.planets = response.results.map((result: any) => ({
          name: result.name,
          climate: result.climate,
          population: result.population,
          terrain: result.terrain,
          residents: result.residents,
          showResidents: false,
        }));
        this.totalPlanets = response.count;
        this.nextPage = response.next;
        this.prevPage = response.previous;
  
        if (!this.prevPage) {
          this.isPrevDisabled = true;
        }
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
          this.updatePlanets(response);
        },
        (error: any) => {
          console.error('Error fetching more planets:', error);
        }
      );
    }
  }

  private updatePlanets(response: any) {
    this.planets = response.results.slice(0, this.initialPlanetsToShow).map((result: any) => this.mapPlanet(result));
    this.totalPlanets = response.count;
    this.nextPage = response.next;
    this.prevPage = response.previous;
    this.isPrevDisabled = !this.prevPage;
    this.isNextDisabled = !this.nextPage;
  }

  toggleResidents(planet: Planet): void {
    planet.showResidents = !planet.showResidents;
  }

  loadPrevPage() {
    if (this.prevPage) {
      this.apiService.fetchPlanets(this.prevPage).subscribe(
        (response: any) => {
          this.planets = response.results.map((result: any) => ({
            name: result.name,
            climate: result.climate,
            population: result.population,
            terrain: result.terrain,
            residents: result.residents,
            showResidents: false
          }));
          this.totalPlanets = response.count;
          this.nextPage = response.next;
          this.prevPage = response.previous;
  
          this.isNextDisabled = false;
          
          if (!this.prevPage) {
            this.isPrevDisabled = true;
          }
        },
        (error: any) => {
          console.error('Error fetching previous page:', error);
        }
      );
    }
  }

  loadNextPage() {
    if (this.nextPage) {
      this.apiService.fetchPlanets(this.nextPage).subscribe(
        (response: any) => {
          this.planets = response.results.map((result: any) => ({
            name: result.name,
            climate: result.climate,
            population: result.population,
            terrain: result.terrain,
            residents: result.residents,
            showResidents: false
          }));
          this.totalPlanets = response.count;
          this.nextPage = response.next;
          this.prevPage = response.previous;
          
          this.isPrevDisabled = false;
        },
        (error: any) => {
          console.error('Error fetching next page:', error);
        }
      );
    }
  }
  

  private mapPlanet(result: any): Planet {
    return {
      name: result.name,
      climate: result.climate,
      population: result.population,
      terrain: result.terrain,
      residents: result.residents,
      showResidents: false
    };
  }
}
