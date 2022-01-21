import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PetDetailService } from "../pet-detail.service"

@Component({
	selector: 'app-pet-details',
	templateUrl: './pet-details.component.html',
	styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {
	id!: any
	pet!: any

	constructor(private route: ActivatedRoute, data: PetDetailService) {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.id = params.get('id')
		})

		data.getPetDetail(this.id).subscribe((pet: any) => {
			const dateTimeFormat = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric', })
			pet.dataNascimento = 'Nasceu em ' + dateTimeFormat.format(new Date(pet.dataNascimento))

			this.pet = pet
		})
	}

	ngOnInit(): void {}

}
