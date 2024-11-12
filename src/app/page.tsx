import Header from "@/components/header";
import Hero from "@/components/hero";
import LivePrices from "@/components/goldPrice";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
     
        <Hero />
        
      </div>
      
      <div style={{
        paddingLeft: "7vw",
        paddingRight: "7vw",
        paddingTop: "5vh",
        paddingBottom:"5vh",
        backgroundColor:"#1E1E1E"
      }}>
        <LivePrices />
      </div>
      
    </>
  );
}
