import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';
import {PersonneService} from '../services/personne.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listpersonne',
  templateUrl: './listpersonne.component.html',
  styleUrls: ['./listpersonne.component.css']
})
export class ListpersonneComponent implements OnInit {
private persons:Person[];
private motCle:string="";

  constructor(private personneService: PersonneService, private router:Router) { }

  ngOnInit() {
    /*this.personneService.getPersonnes().subscribe(data=>{
      this.persons = data;
    }, err=>{
      console.log(err);
    })*/
  }
  onSearch(){
    this.personneService.getPersonns(this.motCle).subscribe(data=>{
      this.persons = data;
    }, err=>{
      console.log(err);
    })
  }

   deletePersonn(p){
    this.personneService.deletePersonne(p.id).subscribe(data=>{
      let confirm ="Etes vous sur de supprimer";
      alert(confirm);
      this.persons.splice(this.persons.indexOf(p),1);
      console.log(data);
       },err=>{
      console.log(err);
    })
  }


  showPerson(p: Person) {
    this.personneService.setter(p);
    this.router.navigate(["/add"]);

  }
  addPersonne() {
    let person= new Person();
    this.personneService.setter(person);
    this.router.navigate(["/add"]);

  }

  chercher() {
  this.onSearch();
  }
}
