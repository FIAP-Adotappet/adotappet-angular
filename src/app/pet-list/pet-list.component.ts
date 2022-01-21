import { Component, OnInit } from '@angular/core';
import { PetDataService } from "../pet-data.service"

@Component({
	selector: 'app-pet-list',
	templateUrl: './pet-list.component.html',
	styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
	pets!: Array<any>

	constructor(data: PetDataService) {
		data.getPets().subscribe((pets: any) => {
			pets.forEach((pet: any) => {
				const dateTimeFormat = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric', })
				pet.dataNascimento = 'Nasceu em ' + dateTimeFormat.format(new Date(pet.dataNascimento))
			})

			this.pets = pets
		})
	}

  ngOnInit(): void {}
}
