import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <main className="bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <footer className="border-t border-slate-700/50 py-12 px-6">
        <div className="container mx-auto text-center text-slate-400 text-sm">
          <p>Designed &amp; built by <span className="text-white">Aditya Acharya</span> — {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
