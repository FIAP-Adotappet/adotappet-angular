import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
	providedIn: 'root'
})
export class PetDataService {

	constructor(private http: HttpClient) { }

	getPets(){
		return this.http.get('https://adotappet-api.herokuapp.com/api/pets')
	}
}
