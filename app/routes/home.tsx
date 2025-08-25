import type { Route } from "./+types/home";
import { HomePage } from "~/pages/HomePage/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gym Page" },
    { name: "description", content: "Una pagina de Gimnasio para Aprender Tailwind" },
  ];
}

export default function Home() {
  return <HomePage />;
}
