import { faker } from '@faker-js/faker';
import moment from 'moment';

export function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
}


export function calcularEdad(fechaNacimiento) {
    const hoy = moment();
    const nacimiento = moment(fechaNacimiento, 'YYYY-MM-DD');
    return hoy.diff(nacimiento, 'years');
  }