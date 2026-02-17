
export const baseUrl = "http://localhost:3000/api";

function getFromStorage(key){
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveToStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function createPerson(person) {
  const people = getFromStorage('people');
  const newPerson = {
    ...person,
id: Date.now(),
};

saveToStorage('people', [...people, newPerson]);

return Promise.resolve(newPerson);
}

function getPeople({ user }) {
    const people = getFromStorage('people');
    return Promise.resolve(people);
}

function getPerson(id) {
  const people = getFromStorage('people');
  const person = people.find((p) => p.id === Number(id));

  if(!person){
    return Promise.reject(`Person not found`);
  }
  return Promise.resolve(person);
}

function deletePerson(id) {
  const people = getFromStorage("people");
  const updatedPeople = people.filter((p) => p.id !== Number(id));

  saveToStorage("people", updatedPeople);

  const memories = getFromStorage("memories");
  const updatedMemories = memories.filter((m) => m.personId !== Number(id));

  saveToStorage("memories", updatedMemories);

  return Promise.resolve();
}

function createMemory(title, note, date, personId, link, imageUrl) {
  const memories = getFromStorage("memories");

  const newMemory = {
    id: Date.now(),
    title,
    note,
    date,
    personId: Number(personId),
    link,
    imageUrl,
  };

  saveToStorage("memories", [...memories, newMemory]);

  return Promise.resolve(newMemory);
}

function getMemories(personId) {
  const memories = getFromStorage("memories");
  const filtered = memories.filter(
    (m) => m.personId === Number(personId)
  );

  return Promise.resolve(filtered);
}

function getCalendar() {
  const memories = getFromStorage("memories");

  // Group memories by date
  const calendar = memories.reduce((acc, memory) => {
    if (!acc[memory.date]) {
      acc[memory.date] = [];
    }
    acc[memory.date].push(memory);
    return acc;
  }, {});

  return Promise.resolve(calendar);
}

export {
  createPerson,
  getPerson,
  getPeople,
  getCalendar,
  deletePerson,
  createMemory,
  getMemories,
};
