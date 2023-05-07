import Image from "next/image";
import TopNavbar2 from "src/components/navbar.js";
import Map from "src/components/map.js";
import Footer from "src/components/footer.js";
const Home = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      <TopNavbar2 />
      <Map />
      <Footer />
    </div>
  );
};
export default Home;
