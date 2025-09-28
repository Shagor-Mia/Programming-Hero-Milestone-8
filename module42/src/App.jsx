import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/Pricing/PricingOptions";
import DaisyPricingOption from "./components/Daisy/DaisyPricingOption";
import ResultChart from "./components/ResultCharts/ResultChart";
import axios from "axios";
import MarkChart from "./components/MarksChart/MarkChart";

const fetchData = async () => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
};

const gymData = fetchData();

const marksData = axios.get("marks.json");

function App() {
  return (
    <>
      <Navbar />
      {/* custom */}
      <Suspense
        fallback={
          <div className="w-full flex justify-center items-center container mx-auto">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <PricingOptions gymData={gymData} />
      </Suspense>
      {/* daisyUi */}
      <Suspense
        fallback={
          <div className="w-full h-full flex justify-center items-center container mx-auto">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <DaisyPricingOption gymData={gymData} />
      </Suspense>
      <ResultChart />

      {/* axios pass */}
      <Suspense
        fallback={
          <div className="w-full h-full flex justify-center items-center container mx-auto">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <MarkChart marksData={marksData} />
      </Suspense>
    </>
  );
}

export default App;
