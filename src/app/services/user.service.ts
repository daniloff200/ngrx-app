import { Observable } from 'rxjs';

export class UsersService {
  users = [
    {id: 1, name: 'Jenna', lastName: 'Poste', sex: 'Female' ,  birthday: '01.03.1901', email: 'Jenna@sp.com', phone: '+380502618980', isVip:true},
    {id: 2, name: 'Brad', lastName: 'Pitt', sex: 'Male'  , birthday: '01.03.1992', email: 'jolie-ex@gmail.com', phone: '+6661488', isVip:true},
    {id: 3, name: 'Mike', lastName: 'Smith', sex: 'Male'  ,birthday: '01.04.1967', email: 'Smith@gmail.com', phone: '+123456790', isVip:false},
  ];

  getUsers(){
    return Observable.timer(1000).mapTo( this.users);
  }

  findOne(id): number {
    let index: number = null;

    this.users.forEach((item, i) => {
      if (+item.id === id) {
        return index = i;
      }
    });

    return index;
  }

  deleteUser(id:number) {
    const index: number = this.findOne(id);
    this.users.splice(index, 1);
    return this.users;

    // return Observable.timer(1000).mapTo( this.users);
  }

  editUser(user) {
    const index: number = this.findOne(user.id);
    user.name = user.name + '123465';
    this.users.splice(index, 1, user);
    return Observable.timer(1000).mapTo( this.users);
  }

  addUser(user) {
    this.users.push(user);
    return this.users;
  //  return Observable.timer(1000).mapTo( this.users);
  }
}
