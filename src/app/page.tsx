
import link from "next/link";
import Navbar from "./components/navbar";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About/>
    </div>
  );
};