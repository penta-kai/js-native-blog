import {Component} from '../core/component';

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        if (localStorage.getItem('visited')) {
            this.hide();
        }
        
        const buttonStart = this.$rootItem.querySelector('.js-header-start');        
        buttonStart.addEventListener('click', buttonStartHandler.bind(this))
    }
}

function buttonStartHandler() {
    localStorage.setItem('visited', JSON.stringify(true));
    
    this.hide();
}