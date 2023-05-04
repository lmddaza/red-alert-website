import TopNavbar from "@/components/top-navbar";
import TopNavbar2 from "@/components/top-navbar-2";
import ContactUs from "@/components/contactUs/contactUs";
import Footer from "@/components/pup-home-footer";
import Footer2 from "@/components/pup-home-footer2";
import FloatingButton from "@/components/floating-icon/floating";

const InternationalAffairs = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      <TopNavbar />
      <TopNavbar2 />
      <ContactUs />

      <Footer />
      <Footer2 />
      <FloatingButton />
    </div>
  );
};

export default InternationalAffairs;
