import {Component} from '@angular/core';
import './mark.js';

declare var submitQuiz: any;
declare var submitButton: any;


@Component({
	selector: 'test-app',
	templateUrl: './test.component.html'

})
export class TestComponent {
	constructor() {

	}

	submitQuiz() {
		submitQuiz();
	}
	submitButton() {

	}


}
