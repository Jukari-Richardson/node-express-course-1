const { people } = require('../data');

// Get all people
const getPeople = (req, res) => {
  res.json(people);
};

// Add a new person
const addPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, message: 'Please provide a name' });
  }

  const newPerson = { id: people.length + 1, name };
  people.push(newPerson);

  res.status(201).json({ success: true, person: newPerson });
};

// Get a specific person by ID
const getPersonById = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === parseInt(id));

  if (!person) {
    return res.status(404).json({ success: false, message: 'Person not found' });
  }

  res.status(200).json({ success: true, person });
};

// Update a person by ID
const updatePersonById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === parseInt(id));

  if (!person) {
    return res.status(404).json({ success: false, message: 'Person not found' });
  }

  person.name = name;

  res.status(200).json({ success: true, person });
};

// Delete a person by ID
const deletePersonById = (req, res) => {
  const { id } = req.params;
  const personIndex = people.findIndex((person) => person.id === parseInt(id));

  if (personIndex === -1) {
    return res.status(404).json({ success: false, message: 'Person not found' });
  }

  people.splice(personIndex, 1);

  res.status(200).json({ success: true, message: 'Person deleted successfully' });
};

module.exports = {
  getPeople,
  addPerson,
  getPersonById,
  updatePersonById,
  deletePersonById,
};
