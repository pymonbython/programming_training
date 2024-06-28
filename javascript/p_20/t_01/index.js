document.addEventListener("DOMContentLoaded", () => {
  class NoteApp {
    #noteArea;
    #textNote;
    #saveBtn;
    #keyNote;
    #sectionNotes;
    #notes;
    constructor() {
      this.#noteArea = document.querySelector(".note-area");
      this.#textNote = null;
      this.#saveBtn = document.querySelector(".save-btn");
      this.#keyNote = null;
      this.#sectionNotes = document.querySelector(".notes");
      this.#notes = null;

      this.displayNotes();

      this.#saveBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.#textNote = this.readNoteText();
        this.#keyNote = Date.now().toString();
        this.saveNote();
        this.createNote();
      });

      this.deleteNote();
    }

    saveNote() {
      localStorage.setItem(this.#keyNote, this.#textNote);
    }

    readNoteText() {
      const noteText = this.#noteArea.value;
      return noteText;
    }

    deleteNote(keyNote) {
      localStorage.removeItem(keyNote);
      const deleteBtn = document.querySelector(`#id${keyNote}`);
      if (deleteBtn) {
        deleteBtn.parentNode.remove();
      }
    }

    createNote(keyNote = this.#keyNote, textNote = this.#textNote) {
      const divNote = document.createElement("div");
      divNote.classList.add("note");
      const textNode = document.createTextNode(textNote);
      divNote.appendChild(textNode);
      const deleteBtn = document.createElement("button");
      deleteBtn.id = "id" + keyNote;
      deleteBtn.textContent = "Delete note";
      deleteBtn.addEventListener("click", () => {
        this.deleteNote(keyNote);
      });
      divNote.appendChild(deleteBtn);
      this.#sectionNotes.appendChild(divNote);
    }

    displayNotes() {
      Object.keys(localStorage)
        .sort((a, b) => b - a)
        .forEach((keyNote) => {
          const textNote = localStorage.getItem(keyNote);
          this.createNote(keyNote, textNote);
        });
    }
  }

  const noteApp = new NoteApp();
});
