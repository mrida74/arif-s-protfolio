
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import ScrollIndicator from "@/components/ScrollIndicator";
import SocialIconBar from "@/components/SocialIconBar";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100">
      <SocialIconBar />
      <Navbar />
      <main className="flex-1 flex flex-col gap-16">
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
}
