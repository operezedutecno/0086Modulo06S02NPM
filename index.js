import {  validate, clean, format, getCheckDigit } from 'rut.js'
import { createRandomUser, calcularEdad } from './utils.js';

const valid1 = validate('18.972.631-7')
const valid2 = validate('11.111.111-0')
console.log({ valid1, valid2, test: 1 });

const user = createRandomUser();
user.age =calcularEdad(user.birthdate)
console.log(user);

