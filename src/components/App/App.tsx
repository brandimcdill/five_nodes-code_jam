import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import People from "../People/People";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import NavBar from "../NavBar/NavBar";
// import Calendar from "../Calendar/Calendar";
import Settings from "../Settings/Settings";
import Account from "../Account/Account";

import type { Person, Memory } from "../../Utils/API";
import {
  createPerson,
  deletePerson,
  createMemory,
  getPerson,
} from "../../Utils/API";

import EditPersonModal from "../Modals/EditPersonModal";
import CreatePersonModal from "../Modals/CreatePersonModal";
import DeletePersonModal from "../Modals/DeletePersonModal";
import CreateMemoryModal from "../Modals/CreateMemoryModal";
import { get } from "node:http";
import ConnectionModal from "../Modals/ConnectionModal";

// Types

type Person = {
  id: number;
  name: string;
  relationship: string;
  avatar?: string;
  memories?: Memory[]; // <-- Add this line
};

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
  const [activeModal, setActiveModal] = useState<ModalType>("");

  const [date, setDate] = useState<Date>(new Date());
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedCard, setSelectedCard] = useState<Person | null>(null);
  const [memories, setMemories] = useState<Memory[]>([]);
  const [modal, setModal] = useState<ModalType>("");

  // Handlers

  const handleCardClick = (card: Person) => {
    setSelectedCard(card);
    setActiveModal("viewConnection");
  };

  const handleModalClose = () => {
    setActiveModal("");
    setSelectedCard(null);
  };

  const handleEditConnectionClick = (card: Person) => {
    setSelectedCard(card);
    setActiveModal("editPerson");
  };

  const handleNewConnectionClick = (card: Person) => {
    setSelectedCard(card);
    setActiveModal("addConnection");
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

  const handleEditPersonClick = (
    id: number,
    name: string,
    relationship: string,
  ) => {
    getPerson(id)
      .then((person) => {
        const updatedPerson: Person = {
          ...person,
          name,
          relationship,
        };
        // Here you would typically update the person in storage and then update the state
        setPeople((prevPeople) =>
          prevPeople.map((person) =>
            person.id === id ? updatedPerson : person,
          ),
        );
      })
      .catch((error: unknown) => {
        console.error("Error editing person:", error);
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

  const handleNewMemoryClick = () => {
    setActiveModal("createMemory");
  };

  // Render

  return (
    <div className="page">
      <div className="page__content">
        
        <NavBar />
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/landing" element={<Landing />} />
          {/* <Route
            path="/"
            element={
              <Calendar
                onChange={setDate}
                activeModal={activeModal}
                selectedCard={selectedCard}
                value={date}
                handleNewMemory={handleNewMemory}
              />
            }
          /> */}
          
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
        </Routes>

        <People
          handleDeleteConnectionClick={handleDeleteConnectionClick}
          selectedCard={selectedCard}
          handleCardClick={handleCardClick}
          onClick={handleCardClick}
          handleEditConnectionClick={handleEditConnectionClick}
          handleNewMemoryClick={handleNewMemoryClick}
        />

        <Footer />

        <EditPersonModal
          modal={activeModal}
          closeModal={handleModalClose}
          handleEditPersonClick={handleEditPersonClick}
        />
        <CreatePersonModal
          modal={activeModal}
          handleAddNewConnection={handleAddNewConnection}
          closeModal={handleModalClose}
        />
        <DeletePersonModal
          modal={activeModal}
          handleDeleteConnectionClick={handleDeleteConnectionClick}
          closeModal={handleModalClose}
        />
        <CreateMemoryModal
          modal={activeModal}
          handleNewMemory={handleNewMemory}
          closeModal={handleModalClose}
        />
        <ConnectionModal
          selectedCard={selectedCard}
          activeModal={activeModal}
          date={date}
        />
      </div>
    </div>
  );
}