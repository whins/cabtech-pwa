import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Contact } from "./contact";
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ContactsService {

	constructor(private http: HttpClient) { }

	getContacts() {
		const a = this.http
		.get('https://randomuser.me/api/?inc=gender,name,picture&results=50')
			.pipe(map(r => (<any>r).results))
			.pipe(
				map(r => {
					return r.map(u => {
						return {
							name: `${u.name.first} ${u.name.last}`,
							image: u.picture.large
						};
					});
				})
			);
		return a;
	}
}
