import {Component} from '../core/component';

export class NavigationComponent extends Component {
    constructor(id) {       
        super(id);

        this.tabs = [];
    }

    init() {
        this.$rootItem.addEventListener('click', tabClickHandler.bind(this));
    }

    registerTabs(tabs) {
        this.tabs = tabs;
    }
}

function tabClickHandler(event) {
    const $targetNav = event.target;
    const $activeNav = this.$rootItem.querySelector('.active');

    if ($targetNav.classList.contains('tab')) {
        event.preventDefault();
        
        const activeNavName = $activeNav.dataset.name;
        const selectNavName = $targetNav.dataset.name;
        
        if (activeNavName === selectNavName) {
            return;
        }
        
        deactivateNav($activeNav);     
        activateNav($targetNav);

        this.tabs.forEach(tab => {
            tab.component.hide();
        });
        
        const selectTab = this.tabs.find(tab => tab.name === selectNavName);
        selectTab.component.show();
    }
}

function deactivateNav($nav) {
    $nav.classList.remove('active');
}

function activateNav($nav) {
    $nav.classList.add('active');
}