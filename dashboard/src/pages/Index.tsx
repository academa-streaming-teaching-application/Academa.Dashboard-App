
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Platform Analytics Dashboard</h1>
        <p className="text-xl text-gray-600 mb-8">
          Monitor platform growth, user engagement, and class performance metrics with our comprehensive admin dashboard.
        </p>
        <Link to="/admin/dashboard">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
            Go to Admin Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
