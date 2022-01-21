import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
	providedIn: 'root'
})
export class PetDetailService {

	constructor(private http: HttpClient) { }

	getPetDetail(id: any){
		return this.http.get('https://adotappet-api.herokuapp.com/api/pets/' + id)
	}
}
