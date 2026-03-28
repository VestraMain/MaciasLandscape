import { Link } from "react-router";
import { Home, Search } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <Search className="w-24 h-24 mx-auto text-[#2d5016] opacity-50" />
        </div>
        <h1 className="text-6xl font-bold text-[#2d5016] mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button size="lg" className="text-white" style={{ backgroundColor: '#0284c7' }}>
            <Home className="mr-2 w-5 h-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
