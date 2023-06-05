import MyComponent from "src/components/firebasecomponent.js";

const HomePage = () => {
  const SEO = {
    title: "Red Alert",
    description: "Your website description",
    openGraph: {
      title: "Your Website Title",
      description: "Your website description",
      type: "website",
      url: "https://www.yourwebsite.com",
      site_name: "Your Website Name",
    },
    // You can add more SEO configurations as needed
  };
  return (
    <div>
      <h1>Realtime Database Example</h1>
      <MyComponent />
    </div>
  );
};

export default HomePage;
