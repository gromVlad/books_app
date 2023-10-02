import type { Meta } from "@storybook/react";
import { Autor } from "./autor";

const meta = {
  title: "Example/AutorCard",
  component: Autor,
} satisfies Meta<typeof Autor>;

export default meta;

export const Default = () => <Autor src={'https://m.media-amazon.com/images/I/A18TEDltP5L._SY2448_CR408%2C0%2C2448%2C2448_.jpg'} books={'5'} name={'John Doe'}/>

export const WithAutors = () => {

  const storyBook = {
    authors: [
      {
        name: 'John Doe',
        books: '5',
        src: 'https://m.media-amazon.com/images/I/A18TEDltP5L._SY2448_CR408%2C0%2C2448%2C2448_.jpg',
      },
      {
        name: 'Jane Smith',
        books: '5',
        src: 'https://www.redlandcitybulletin.com.au/images/transform/v1/crop/frm/JttJDmr6WF76jCGCUMgLMk/6605ff4c-6e48-4187-8116-5e0d894cfcd1.jpg/r0_0_4006_2671_w1200_h678_fmax.jpg'
      },
      {
        name: 'David Johnson',
        books: '2',
        src: 'https://m.media-amazon.com/images/I/51JBADtooVL._SX401_CR0%2C0%2C401%2C401_.jpg'
      },
      {
        name: 'Sarah Adams',
        books: '7',
        src: 'https://images.squarespace-cdn.com/content/v1/5d8764c12f5ec2314732e2e0/1578606500859-N88G8ETDA79L5A1RTBCK/headshot.jpg'
      },
      {
        name: 'Michael Brown',
        books: '4',
        src: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/7stvfa8kpu5j4su9b2oh63f1a4.jpg'
      },
      {
        name: 'Harper Lee',
        books: '2',
        src: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-50358657.jpg'
      },
      {
        name: 'J.K. Rowling',
        books: '9',
        src: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1061157246.jpg'
      },
      {
        name: 'Jane Austen',
        books: '6',
        src: 'https://cdn.britannica.com/12/172012-050-DAA7CE6B/Jane-Austen-Cassandra-engraving-portrait-1810.jpg'
      },
    ],
  };


  return (
    <div style={{ background: 'black', padding: '100px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {storyBook.authors.map((el, index) => (
        <Autor key={index} src={el.src} name={el.name} books={el.books} />
      ))}
    </div>
  )
}