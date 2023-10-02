import { About } from "./layout/about/about";
import { Autors } from "./layout/autors/autors";
import { Books } from "./layout/books/books";
import { Footer } from "./layout/footer/footer";
import { GiftIdeas } from "./layout/giftIdeas/giftIdeas";
import { Header } from "./layout/header/header";
import { WhatRead } from "./layout/whatRead/whatRead";
import { authorsData, booksData, footerData, headerData } from "./state/state";

export function App() {
  return (
    <>
      <Header navItems={headerData} isHidden={false} />
      <About />
      <Books id="books" booksData={booksData} />
      <WhatRead id="read"/>
      <Autors id='authors' autorsData={authorsData} />
      <GiftIdeas id="ideas" />
      <Footer id="aboutUs" dataLink={footerData} email={'support@bbookshelf.com'} telephone={'+44 1332 412251'} />
    </>
  );
}



