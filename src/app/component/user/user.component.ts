import { Component } from '@angular/core';
import { User } from '../../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
    //Properties
    users: Array<User> = [];

    //Methods
    constructor() {
        this.users.push({
            firstName: 'Clifford',
            lastName: 'Musni',
            age: 19,
            address: {
                street: 'Trees',
                city: 'Quezon City'
            }
        },
        {
            firstName: 'John Rey',
            lastName: 'Baylen',
            age: 23,
            address: {
                street: 'Somewhere',
                city: 'Malabon City'
            }
        },
        {
            firstName: 'Erick',
            lastName: 'Ignacio',
            age: 23,
            address: {
                street: 'Somewhere',
                city: 'City'
            }
        });
    }

}
