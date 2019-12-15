import {Component} from '../core/component';
import {Form} from '../core/form';
import {Validators} from '../core/validators';
import {apiService} from '../services/api.service';

export class CreateComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$rootItem.addEventListener('submit', submitCreateForm.bind(this));
    }
}

async function submitCreateForm(event) {
    event.preventDefault();

    const form = new Form(
        this.$rootItem,
        {
            title: [Validators.required, Validators.minLength(5)],
            fulltext: [Validators.required]
        }
    );

    if (form.validate()) {
        const formData = {
            date: new Date().toLocaleDateString(),
            ...form.values()
        };
        
        await apiService.createPost(formData);

        form.clear();

        alert('Запись создана в базе данный.');
    }     
}