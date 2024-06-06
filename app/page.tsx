import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className=" home min-h-screen ">
      <div className="flex items-center justify-between">
        <Sidebar />
        <Hero />
      </div>
    </main>
  );
}
