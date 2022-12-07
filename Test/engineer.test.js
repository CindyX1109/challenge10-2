const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
const engineer = new Engineer ('Rosy',0,'rosy@team.com','Engineer');
expect(engineer.github).toBe('Engineer');
  });