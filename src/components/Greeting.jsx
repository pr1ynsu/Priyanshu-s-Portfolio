import { useEffect, useState } from "react";
import "../style/Greeting.css";

const greetings = [
  "Hello","Hola","Bonjour","Ciao","Namaste",
  "こんにちは","안녕하세요","你好","Hallo","Olá"
];

export default function Greeting({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % greetings.length);
    }, 300);

    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 800); // after slide animation
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`greeting ${hide ? "greeting-hide" : ""}`}>
      <h1>{greetings[index]}</h1>
    </div>
  );
}
