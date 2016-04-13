import {Component} from 'angular2/core';

@Component({
    selector: 'application',
    template: '<h1>This is <%= appName %></h1>'
})
export class AppComponent { }