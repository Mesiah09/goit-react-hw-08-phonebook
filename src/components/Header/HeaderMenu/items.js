import { nanoid } from "nanoid";

export const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home",
        private: false
    },
    {
        id: nanoid(),
        to: "/phonebook",
        text: "Phonebook",
        private: true
    }
]