import {Component} from '../core/component';
import {Form} from '../core/form';
import {Validators} from '../core/validators';

export class CreateComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$rootItem.addEventListener('submit', submitCreateForm.bind(this));
    }
}

function submitCreateForm(event) {
    event.preventDefault();

    const form = new Form(
        this.$rootItem,
        {
            title: [Validators.required, Validators.minLength(5)],
            fulltext: [Validators.required]
        }
    );

    if (form.validate()) {
        console.log(form.values());

        form.clear();
    }     
}