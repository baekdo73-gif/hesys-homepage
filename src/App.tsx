import { Navbar, Hero, About, BusinessAreas, Timeline, Products, Partners, Contact, Footer } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <BusinessAreas />
        <Timeline />
        <Products />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

