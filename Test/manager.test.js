const Employee = require('../lib/manager.js');

test('creates an employee object', () => {
const employee = new Employee ('Samuel',0,'samuel@team.com','Manager')
expect(employee.name).toBe('Samuel');
expect(employee.id).toEqual(0);
expect(employee.email).toBe('samuel@team.com');
expect(employee.role).toBe('Manager');
  });