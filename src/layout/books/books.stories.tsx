import type { Meta } from "@storybook/react";
import { Books } from "./books";

const meta = {
  title: "Example/Books",
  component: Books,
} satisfies Meta<typeof Books>;

export default meta;

export const Default = () => <Books />

export const WithData = () => {
  const storyBook = [
      {
        name: 'John Doe',
        books: 'Sobriety and Beyond ',
        src: 'https://img.thriftbooks.com/api/images/m/9f3fd8545d85a0947fcbfd9fabf6a9605d96664b.jpg',
      },
      {
        name: 'Jane Smith',
        books: 'Murder, Gender and the Media',
        src: 'https://media.springernature.com/full/springer-static/cover-hires/book/978-1-137-00773-5?as=webp'
      },
      {
        name: 'David Johnson',
        books: "Tucker's Way",
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1384805364i/18692944.jpg'
      },
      {
        name: 'Sarah Adams',
        books: 'The Cheat Sheet: A Novel',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1624094827i/58100280.jpg'
      },
      {
        name: 'Michael Brown',
        books: "AUTHENTIC FIRE: A RESPONSE TO JOHN MACARTHUR'S STRANGE FIRE",
        src: 'https://store.askdrbrown.org/cdn/shop/files/AuthFIRE1_1024x1024.jpg?v=1693330084'
      },
      {
        name: 'Harper Lee',
        books: 'To Kill a Mockingbird',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg'
      },
      {
        name: 'Suzanne Collins',
        books: 'The Hunger Games',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg'
      },
      {
        name: 'J.K. Rowling',
        books: 'Harry Potter and the Order of the Phoenix',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546910265i/2.jpg'
      },
      {
        name: 'Jane Austen',
        books: 'Pride and Prejudice',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg'
      }
    ];

  return (
    <>
      <Books booksData={storyBook}/>
    </>
  )
}

