import type { Meta } from "@storybook/react";
import { Autor } from "./autor";

const meta = {
  title: "Example/AutorCard",
  component: Autor,
} satisfies Meta<typeof Autor>;

export default meta;

export const Default = () => <Autor src={'https://gobelen-club.ru/wp-content/uploads/2018/11/c1-1.jpg'} books={'5'} name={'Винсент Ван Гог'}/>

export const WithAutors = () => {

  const storyBook = {
    authors: [
      {
        name: 'John Doe',
        books: '3',
        src: 'https://gobelen-club.ru/wp-content/uploads/2018/11/c1-1.jpg',
      },
      {
        name: 'Jane Smith',
        books: '5',
        src:''
      },
      {
        name: 'David Johnson',
        books: '2',
        src: ''
      },
      {
        name: 'Sarah Adams',
        books: '7',
        src: ''
      },
      {
        name: 'Michael Brown',
        books: '4',
        src: ''
      },
    ],
  };


  return (
    <div style={{ background: 'black', padding: '100px',display:'flex',gap:'10px' }}>
      {storyBook.authors.map((el, index) => (
        <Autor key={index} src={el.src} name={el.name} books={el.books} />
      ))}
    </div>
  )
}