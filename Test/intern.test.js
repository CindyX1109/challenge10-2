const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
const intern = new Intern ('Cindy',0,'cindy@team.com','Intern');
expect(intern.school).toBe('Intern');
  });