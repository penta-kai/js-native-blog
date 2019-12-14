import {Component} from '../core/component';

export class NavigationComponent extends Component {
    constructor(id) {       
        super(id);
    }

    init() {
        this.$rootItem.addEventListener('click', tabClickHandler.bind(this));
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
        
        if (activeNavName) {
            deactivateNav($activeNav);

            const $activeTab = document.getElementById(activeNavName); 
            deactivateTab($activeTab);
        }       
        
        if (selectNavName) {
            activateNav($targetNav);

            const $selectTab = document.getElementById(selectNavName);
            activateTab($selectTab);
        }
        
    }
}

function deactivateNav($nav) {
    $nav.classList.remove('active');
}
function activateNav($nav) {
    $nav.classList.add('active');
}

function activateTab($tab) {
    $tab.classList.add('hide');
    $tab.classList.remove('active');
}
function deactivateTab($tab) {
    $tab.classList.remove('hide');
    $tab.classList.add('active');
}