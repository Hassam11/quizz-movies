import { createContext, useState } from "react";
import DataInfo from "./questions.json";

export const Questions = createContext();

export default function QuestionsContext({ children }) {
  const [dataQuestions, setDataQuestions] = useState([]);
  const [question, setQuestion] = useState([]);

  async function fetchQuestion(limit) {
    try {
      setDataQuestions(DataInfo);
      if (Array.isArray(DataInfo)) {
        setQuestion([...DataInfo].sort(() => Math.random() - 0.5).slice(0, limit));
      }
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  }

  return (
    <Questions.Provider value={{ dataQuestions, question, fetchQuestion }}>
      {children}
    </Questions.Provider>
  );
}
