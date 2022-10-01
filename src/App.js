import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./shared/AppRouter";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
