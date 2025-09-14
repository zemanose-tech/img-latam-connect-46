import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Trophy, Target, Users, Clock } from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    question: "¿Cuál es tu nivel de experiencia deportiva?",
    options: [
      { id: "beginner", label: "Principiante", sports: ["tennis", "golf", "track"] },
      { id: "intermediate", label: "Intermedio", sports: ["basketball", "soccer", "baseball"] },
      { id: "advanced", label: "Avanzado", sports: ["football", "lacrosse", "wrestling"] }
    ]
  },
  {
    id: 2,
    question: "¿Prefieres deportes individuales o de equipo?",
    options: [
      { id: "individual", label: "Individual", sports: ["tennis", "golf", "track", "wrestling"] },
      { id: "team", label: "De equipo", sports: ["football", "basketball", "baseball", "soccer", "lacrosse"] }
    ]
  },
  {
    id: 3,
    question: "¿Qué tipo de entrenamiento prefieres?",
    options: [
      { id: "technical", label: "Técnico y preciso", sports: ["tennis", "golf", "baseball"] },
      { id: "physical", label: "Físico e intenso", sports: ["football", "wrestling", "track"] },
      { id: "tactical", label: "Táctico y estratégico", sports: ["basketball", "soccer", "lacrosse"] }
    ]
  }
];

const sportDetails = {
  tennis: { name: "Tenis", icon: Trophy, color: "bg-green-500" },
  golf: { name: "Golf", icon: Target, color: "bg-emerald-500" },
  football: { name: "Fútbol Americano", icon: Users, color: "bg-blue-500" },
  basketball: { name: "Baloncesto", icon: Clock, color: "bg-orange-500" },
  baseball: { name: "Béisbol", icon: Trophy, color: "bg-red-500" },
  soccer: { name: "Fútbol", icon: Users, color: "bg-green-600" },
  lacrosse: { name: "Lacrosse", icon: Target, color: "bg-purple-500" },
  track: { name: "Atletismo", icon: Clock, color: "bg-yellow-500" },
  wrestling: { name: "Lucha", icon: Users, color: "bg-gray-600" }
};

const SportSelectionQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [currentQuestion]: selectedAnswer });
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
      } else {
        setShowResults(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer("");
  };

  const getRecommendedSports = () => {
    const sportCounts: Record<string, number> = {};
    
    Object.values(answers).forEach((answer, questionIndex) => {
      const question = quizQuestions[questionIndex];
      const option = question.options.find(opt => opt.id === answer);
      
      if (option) {
        option.sports.forEach(sport => {
          sportCounts[sport] = (sportCounts[sport] || 0) + 1;
        });
      }
    });

    return Object.entries(sportCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([sport]) => sport);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResults) {
    const recommendedSports = getRecommendedSports();
    
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-img-blue">¡Tus Deportes Recomendados!</CardTitle>
          <CardDescription>
            Basado en tus respuestas, estos deportes son perfectos para ti:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendedSports.map((sportId, index) => {
              const sport = sportDetails[sportId as keyof typeof sportDetails];
              const IconComponent = sport.icon;
              
              return (
                <Card key={sportId} className="border-2 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${sport.color} rounded-full flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{sport.name}</h3>
                          <Badge variant={index === 0 ? "default" : "secondary"}>
                            {index === 0 ? "Mejor Opción" : `Opción ${index + 1}`}
                          </Badge>
                        </div>
                      </div>
                      <Link to={`/sport/${sportId}`}>
                        <Button className="bg-img-blue hover:bg-img-blue-dark">
                          Ver Detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button onClick={handleRestart} variant="outline" className="flex-1">
              Repetir Quiz
            </Button>
            <Link to="/contact" className="flex-1">
              <Button className="w-full bg-img-blue hover:bg-img-blue-dark">
                Hablar con Representante
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline">Pregunta {currentQuestion + 1} de {quizQuestions.length}</Badge>
          <span className="text-sm text-gray-500">{Math.round(progress)}% completado</span>
        </div>
        <Progress value={progress} className="mb-4" />
        <CardTitle className="text-xl text-img-blue">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
          <div className="space-y-4">
            {question.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label 
                  htmlFor={option.id} 
                  className="flex-1 cursor-pointer p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        
        <div className="mt-6 flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
          >
            Anterior
          </Button>
          <Button 
            onClick={handleNext}
            disabled={!selectedAnswer}
            className="bg-img-blue hover:bg-img-blue-dark"
          >
            {currentQuestion === quizQuestions.length - 1 ? "Ver Resultados" : "Siguiente"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SportSelectionQuiz;