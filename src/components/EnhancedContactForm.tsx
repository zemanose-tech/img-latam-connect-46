import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Send, Star, Trophy, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const sportsOptions = [
  { id: "tennis", name: "Tenis" },
  { id: "golf", name: "Golf" },
  { id: "football", name: "Fútbol Americano" },
  { id: "basketball", name: "Baloncesto" },
  { id: "baseball", name: "Béisbol" },
  { id: "soccer", name: "Fútbol" },
  { id: "lacrosse", name: "Lacrosse" },
  { id: "track", name: "Atletismo" },
  { id: "wrestling", name: "Lucha" }
];

const ageGroups = ["10-12 años","13-15 años","16-18 años","19+ años"];

const programTypes = [
  { id: "boarding", name: "Programa de Internado", description: "Año académico completo" },
  { id: "day", name: "Programa de Día", description: "Solo entrenamientos" },
  { id: "camps", name: "Campamentos", description: "1-4 semanas" },
  { id: "online", name: "Entrenamiento Online", description: "Desde casa" }
];

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", country: "",
    age: "", sports: [] as string[], programType: "", experience: "",
    message: "", budget: "", startDate: "", parentConsent: false, newsletter: true
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSportChange = (sportId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      sports: checked ? [...prev.sports, sportId] : prev.sports.filter(s => s !== sportId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ⛳️ HARD-CODED Supabase Edge Function URL (debug step)
      const url = "https://jhtwrxhorlzwjynwxxny.supabase.co/functions/v1/send-inquiry-email" as const;

      // anon key from Vite env (must exist in Lovable Settings → Env Vars)
      const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

      console.log("[EnhancedContactForm] POSTing to:", url);
      alert(`[EnhancedContactForm] POSTing to:\n${url}`);

      const fallbackMessage = `
Nombre: ${`${formData.firstName} ${formData.lastName}`.trim()}
Email: ${formData.email}
Teléfono: ${formData.phone || "-"}
País: ${formData.country || "-"}
Edad: ${formData.age || "-"}
Deportes: ${formData.sports.join(", ") || "-"}
Programa: ${formData.programType || "-"}
Nivel: ${formData.experience || "-"}
Presupuesto: ${formData.budget || "-"}
Inicio deseado: ${formData.startDate || "-"}
Newsletter: ${formData.newsletter ? "Sí" : "No"}
`.trim();

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          apikey: SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          country: formData.country || "-",
          phoneCode: "",
          phone: formData.phone || "-",
          message: (formData.message || "").trim() || fallbackMessage,
          inquiryType: formData.programType || "General",
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      toast({ title: "¡Solicitud Enviada!", description: "Nuestro representante te contactará pronto." });

      setFormData({
        firstName: "", lastName: "", email: "", phone: "", country: "",
        age: "", sports: [], programType: "", experience: "",
        message: "", budget: "", startDate: "", parentConsent: false, newsletter: true
      });
    } catch (error) {
      console.error("Email error:", error);
      toast({ title: "Error", description: "No se pudo enviar tu solicitud. Intenta de nuevo.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // ... (UI unchanged)
    <div className="py-20 bg-gradient-to-b from-img-white to-img-gray">
      {/* keep your existing JSX here exactly as before */}
      {/* I didn't alter the UI portion to minimize diff; only handleSubmit changed */}
    </div>
  );
};

export default EnhancedContactForm;