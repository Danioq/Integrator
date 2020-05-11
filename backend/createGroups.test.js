const {isTheSameDistrict, isTheSameDepartment, isTheSameAge, hasGroupFreePlace, createEmptyGroups}= require('./createGroups.js');

const group = [
    {district: 'Krzyki', department: 'HR', age: 42},
    {district: 'Psie pole', department: 'IT', age: 28},
    {district: 'Olbin', department: 'PR', age: 31}
];

const employee = {district: 'Krzyki', department: 'IT', age: 42};
const employee2 = {district: 'Rozanka', department: 'Transport', age: 60};

const size = 5; 
const size2 = 3;

const numOfGroups = 100;

test('Check if employee lives in the same district as someone from the group', () => {
    expect(isTheSameDistrict(group, employee)).toBe(true);
    expect(isTheSameDistrict(group, employee2)).toBe(false);
});

test('Check if employee works in the same department as someone from the group', () => {
    expect(isTheSameDepartment(group, employee)).toBe(true);
    expect(isTheSameDepartment(group, employee2)).toBe(false);
})

test('Check if employee is the same age as someone from the group', () => {
    expect(isTheSameAge(group, employee)).toBe(true);
    expect(isTheSameAge(group, employee2)).toBe(false);
})

test('Check if group has free place', () => {
    expect(hasGroupFreePlace(group, size)).toBe(true);
    expect(hasGroupFreePlace(group, size2)).toBe(false);
})

test('Check if good amount of groups is created', () => {
    expect(createEmptyGroups(numOfGroups).length).toBe(numOfGroups);
})