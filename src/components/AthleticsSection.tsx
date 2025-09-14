import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const AthleticsSection = () => {
  return (
    <section className="bg-background px-6 py-16">
      <div className="bg-muted h-64 mb-8 flex items-center justify-center rounded-lg">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">Athletics Placeholder</p>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-primary mb-8">ATHLETICS</h2>
      <p className="text-foreground text-lg leading-relaxed mb-8">
        Athletic excellence through world-class training and facilities.
      </p>
      <Button asChild>
        <Link to="/sports">Saber Más</Link>
      </Button>
    </section>
  );
};
export default AthleticsSection;