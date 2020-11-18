import { Injectable } from '@angular/core';
import { Contacts } from '../interfaces/Contacts';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _listContacts: Contacts[];

  constructor(private http: HttpClient) {
    this._listContacts = [];

  }


  get listContacts(): Contacts[] {
    return this._listContacts;

  }

  addContact(contacto) {
    this._listContacts.push(contacto);

  }

  getData(path: string) {
    return this.http.get<Contacts[]>(path).pipe(
      map(list => {
        this._listContacts = list;
        return list;
      })
    );


  }


}
