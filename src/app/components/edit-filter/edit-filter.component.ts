import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms'; 
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-filter',
  templateUrl: './edit-filter.component.html',
  styleUrls: ['./edit-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditFilterComponent implements OnInit {
  title = 'edit-filter';
  filterForm = {
  	keyWords: '',
  	sources: '',
  	cities: '',
    favourite: ''
  };

  keywordOptions = [
    'javascript',
    'angular',
    'html',
    'css',
    'bootstrap',
    'nodeJs',
    'expressJs',
    'gulp',
    'grunt'
  ];

  keywordOptions2 = [
    'naukri',
    'monster',
    'linkedin',
    'hasjobs',
    'toptalent',
    'geeksearch',
    'stackoverflow',
    'github',
    'quora',
    'medium'
  ];

  keywordOptions3 = [
    'hyderabad',
    'warangal',
    'vishakapatnam',
    'vijayawada',
    'tirupati',
    'delhi',
    'mumbai',
    'kolkata',
    'chennai',
    'bangalore',
    'bhopal',
    'nagpur',
    'kochi',
    'agra',
    'trivandrum'
  ];

  constructor(
        public router: Router
  ){

  }

  createFilter(){
  	console.log(this.filterForm);
  	if(this.filterForm.keyWords == '' || this.filterForm.sources == '' || this.filterForm.cities == ''){
  		alert("Please fill all the fields to create the filter.");
  	}else{
      window.localStorage.setItem('keyWords', this.filterForm.keyWords);
      window.localStorage.setItem('sources', this.filterForm.sources);
      window.localStorage.setItem('cities', this.filterForm.cities);
      window.localStorage.setItem('favourite', this.filterForm.favourite);
  		this.router.navigateByUrl('/details');
  	}
  }

  ngOnInit() {
    if(window.localStorage.getItem('keyWords')){
      this.filterForm.keyWords = window.localStorage.getItem('keyWords');
    }
    if(window.localStorage.getItem('sources')){
      this.filterForm.sources = window.localStorage.getItem('sources');
    }
    if(window.localStorage.getItem('cities')){
      this.filterForm.cities = window.localStorage.getItem('cities');
    }
    if(window.localStorage.getItem('favourite')){
      this.filterForm.favourite = window.localStorage.getItem('favourite');
    }
  }
}
