import {Component} from '@angular/core';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    selector: 'app-page-one',
  template: `
    <div class="card tab-page">
      <div class="card-body">
        <h1>{{page}}</h1>
       
      </div>
    </div>
  `
})
export class PageOne {page = 'page 1';}