export const baseUrl = "http://localhost:3000/api";

export type Memory = {
  id: number;
  title: string;
  note: string;
  date: string;
  personId: number;
  link?: string;
  imageUrl?: string;
};

export type Person = {
  id: number;
  name: string;
  relationship: string;
  avatar?: string;
};

function getFromStorage<T>(key: string): T[] {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function saveToStorage<T>(key: string, value: T[]): void {
  localStorage.setItem(key, JSON.stringify(value));
}

const createPerson = async (
  name: string,
  relationship: string,
  avatar?: string
): Promise<Person> => {
  const people = getFromStorage<Person>("people");

  const newPerson: Person = {
    id: Date.now(),
    name,
    relationship,
    avatar,
  };

  saveToStorage("people", [...people, newPerson]);

  return newPerson;
};

const getPeople = async (): Promise<Person[]> => {
  return getFromStorage<Person>("people");
};

const getPerson = async (id: number): Promise<Person> => {
  const people = getFromStorage<Person>("people");
  const person = people.find((p) => p.id === id);

  if (!person) {
    throw new Error("Person not found");
  }

  return person; 
};

const deletePerson = async (id: number): Promise<void> => {
  const people = getFromStorage<Person>("people");
  const updatedPeople = people.filter((p) => p.id !== id);
  saveToStorage("people", updatedPeople);

  const memories = getFromStorage<Memory>("memories");
  const updatedMemories = memories.filter((m) => m.personId !== id);
  saveToStorage("memories", updatedMemories);
};

const createMemory = async (
  title: string,
  note: string,
  date: string,
  personId: number,
  link?: string,
  imageUrl?: string
): Promise<Memory> => {
  const memories = getFromStorage<Memory>("memories");

  const newMemory: Memory = {
    id: Date.now(),
    title,
    note,
    date,
    personId,
    link,
    imageUrl,
  };

  saveToStorage("memories", [...memories, newMemory]);

  return newMemory;
};

const getMemories = async (personId: number): Promise<Memory[]> => {
  const memories = getFromStorage<Memory>("memories");
  return memories.filter((m) => m.personId === personId);
};

const getCalendar = async (): Promise<Record<string, Memory[]>> => {
  const memories = getFromStorage<Memory>("memories");

  return memories.reduce<Record<string, Memory[]>>((acc, memory) => {
    if (!acc[memory.date]) {
      acc[memory.date] = [];
    }
    acc[memory.date].push(memory);
    return acc;
  }, {});
};

export {
  createPerson,
  getPerson,
  getPeople,
  getCalendar,
  deletePerson,
  createMemory,
  getMemories,
};
