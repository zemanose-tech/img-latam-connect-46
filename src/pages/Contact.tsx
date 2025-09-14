import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnhancedContactForm from "@/components/EnhancedContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <EnhancedContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;