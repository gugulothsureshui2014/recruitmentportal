import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-filter-details',
  templateUrl: './filter-details.component.html',
  styleUrls: ['./filter-details.component.css']
})
export class FilterDetailsComponent implements OnInit {
  constructor(
        public router: Router
  ){

  }
  title = 'filter-details';
  filterForm = {
  	keyWords: '',
  	sources: '',
  	cities: '',
  	favourite: ''
  };
  editFilter(){
  	this.router.navigateByUrl('/edit');
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
  	this.filterForm.favourite = window.localStorage.getItem('favourite');
  }
}
