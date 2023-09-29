import type { Meta } from "@storybook/react";
import { BooksCard } from "./booksCard";
import { useState } from "react";

const meta = {
  title: "Example/BooksCard",
  component: BooksCard,
} satisfies Meta<typeof BooksCard>;

export default meta;

export const Default = () => <BooksCard src={'https://img.thriftbooks.com/api/images/m/9f3fd8545d85a0947fcbfd9fabf6a9605d96664b.jpg'} book={'Sobriety and Beyond'} name={'John Doe'}/>

export const WithAutors = () => {

  const [clickBtn, setclickBtn] = useState<number>(0)
  const [clickIcons, setclickIcons] = useState<number>(0)

  const btnhandler = () => setclickBtn(clickBtn + 1)
  const iconshandler = () => setclickIcons(clickIcons + 1)
  

  const storyBook = {
    authors: [
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
    ],
  };


  return (
    <>
      <p>click on Btn : {clickBtn}</p>
      <p>click on icons : {clickIcons}</p>
    <div style={{ background: 'black', padding: '100px',display:'flex',gap:'10px',flexWrap:'wrap' }}>
      {storyBook.authors.map((el, index) => (
        <BooksCard key={index} src={el.src} name={el.name} book={el.books} onclickBtn={btnhandler} onClickIcons={iconshandler}/>
      ))}
    </div>
    </>
  )
}
