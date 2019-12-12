export class Component {
    constructor(id) {
        this.$rootItem = document.getElementById(id);

        this.init();
    }

    init() {}

    hide() {
        this.$rootItem.classList.add('hide');
    }
    show() {
        this.$rootItem.classList.remove('hide');
    }
}