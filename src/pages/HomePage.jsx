import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "react-spinner";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = () => {
    setIsLoading(true);
    // Simulate an API call or processing time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
      <p className="text-xl text-gray-600 mb-8">
        This is a bare-bones application that you can modify and build upon.
      </p>
      <Button onClick={handleBuyNow} disabled={isLoading} className="relative">
        {isLoading ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            Please wait
          </>
        ) : (
          "Buy Now"
        )}
      </Button>
    </div>
  );
};

export default HomePage;