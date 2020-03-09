import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private host: string = 'http://localhost:8083/rest';
  private person: Person;

  constructor(private http: HttpClient) {
  }

  getPersonnes(): Observable<Person[]> {
    return this.http.get<Person[]>(this.host + '/listPersonne');
  }

  getPersonne(id: number) {
    return this.http.get(this.host + '/show/' + id);
  }

  deletePersonne(id: number) {
    return this.http.delete(this.host + '/delete/' + id);
  }

  savePersonne(person: Person) {
    return this.http.post(this.host + '/add', person);
  }

  updatePeersonne(person: Person) {
    return this.http.put(this.host + '/update', person);
  }
  getPersonns(motCle:string): Observable<Person[]>{
    return this.http.get<Person[]>(this.host+"/cherchermc?mc="+motCle);
  }

  setter(person: Person) {
    this.person = person;
  }

  getter() {
    return this.person;
  }
}
