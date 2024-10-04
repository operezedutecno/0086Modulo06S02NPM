import {  validate, clean, format, getCheckDigit } from 'rut.js'
import { faker } from '@faker-js/faker';

const valid1 = validate('18.972.631-7')
const valid2 = validate('11.111.111-0')
console.log({ valid1, valid2, test: 1 });


function createRandomUser() {
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

console.log(createRandomUser());

