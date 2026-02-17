import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import People from "../People/People";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import NavBar from "../NavBar/NavBar";
import CalendarComponent from "../Calendar/Calendar";

import type { Person, Memory } from "../../Utils/API";
import { createPerson, deletePerson, createMemory } from "../../Utils/API";

import EditPersonModal from "../Modals/EditPersonModal";
import CreatePersonModal from "../Modals/CreatePersonModal";
import DeletePersonModal from "../Modals/DeletePersonModal";
import CreateMemoryModal from "../Modals/CreateMemoryModal";

// Types

type MemoryInput = {
  title: string;
  note: string;
  date: string | Date;
  personId: number;
  link?: string;
  imageUrl?: string;
};

type ModalType =
  | "createPerson"
  | "addConnection"
  | "editPerson"
  | "deletePerson"
  | "createMemory"
  | string;

// Component

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>("createPerson");

  const [date, setDate] = useState<Date>(new Date());
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedCard, setSelectedCard] = useState<Person | null>(null);

  // Handlers

  const handleCardClick = (card: Person) => {
    setSelectedCard(card);
    setActiveModal("editPerson");
  };

  const handleAddNewConnection = (
    name: string,
    relationship: string,
    avatar?: string,
  ) => {
    createPerson(name, relationship, avatar).then((newPerson) => {
      setPeople((prevPeople) => [...prevPeople, newPerson]);
    });
  };

  const handleDeleteConnectionClick = (card: Person) => {
    deletePerson(card.id)
      .then(() => {
        setPeople((prevPeople) =>
          prevPeople.filter((person) => person.id !== card.id),
        );
      })
      .catch((error: unknown) => {
        console.error("Error deleting person:", error);
      });
  };

  const handleNewMemory = (memoryData: MemoryInput) => {
    createMemory(
      memoryData.title,
      memoryData.note,
      new Date(memoryData.date).toISOString(),
      memoryData.personId,
      memoryData.link,
      memoryData.imageUrl,
    )
      .then((newMemory: Memory) => {
        setPeople((prevPeople) =>
          prevPeople.map((person) => {
            if (person.id === memoryData.personId) {
              return {
                ...person,
                memories: [...(person.memories ?? []), newMemory],
              };
            }
            return person;
          }),
        );
      })
      .catch((error: unknown) => {
        console.error("Error creating memory:", error);
      });
  };

  // Render

  return (
    <div className="page">
      <div className="page__content">
        <NavBar />
        <Header />

        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route
            path="/"
            element={
              <CalendarComponent
                onChange={setDate}
                activeModal={activeModal}
                selectedCard={selectedCard}
                value={date}
                handleNewMemory={handleNewMemory}
              />
            }
          />
        </Routes>

        <People
          handleDeleteConnectionClick={handleDeleteConnectionClick}
          selectedCard={selectedCard}
          people={people}
          handleCardClick={handleCardClick}
        />

        <Footer />

        <EditPersonModal modal={activeModal} setModal={setActiveModal} />
        <CreatePersonModal modal={activeModal} setModal={setActiveModal} />
        <DeletePersonModal modal={activeModal} setModal={setActiveModal} />
        <CreateMemoryModal modal={activeModal} setModal={setActiveModal} />
      </div>
    </div>
  );
}
