import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';
import {PersonneService} from '../services/personne.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personneform',
  templateUrl: './personneform.component.html',
  styleUrls: ['./personneform.component.css']
})
export class PersonneformComponent implements OnInit {
  private person: Person;
  //private id:number;
  constructor(private personService: PersonneService, private router: Router) { }

  ngOnInit() {
    this.person=this.personService.getter();
  }


  saveForm() {
    if( this.person.id==undefined){
      this.personService.savePersonne(this.person).subscribe(person=>{
        console.log(person);
        this.router.navigate(["/list"]);
      }, err=>{
        console.log(err);
      });
    }else{
      this.personService.updatePeersonne(this.person).subscribe(person=>{
        console.log(person);
        this.router.navigate(["/list"]);
      }, err=>{
        console.log(err);
      })
    }
  }


}
