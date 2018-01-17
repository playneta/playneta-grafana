import {PanelCtrl} from 'app/plugins/sdk';
export class ButtonClass extends PanelCtrl{
	constructor ($scope, $injector) {
		super ($scope, $injector);
		this.text = "Hello";
		console.log('inited');
		};

	
	clicked(){
	this.text = "Clicked";
	console.log('clicked');
	}

}
ButtonClass.templateUrl = 'module.html';
