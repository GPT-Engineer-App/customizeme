import { Home, PlusCircle } from "lucide-react";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <HomePage />,
  },
  {
    title: "Placeholder",
    to: "/placeholder",
    icon: <PlusCircle className="h-4 w-4" />,
    page: <PlaceholderPage />,
  },
];