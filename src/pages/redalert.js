import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";
import Footer from "src/components/footer/footer.js";

const redalert = () => {
  return (
    <div>
       <div className="full-page">
      <NavigationBar className="custom-navbar" />
      <div className="content-container">
      <h1 className="heading-partner">Red Alert</h1>
        <div className="photo-holder">
          <img
            src="senspak.png"
            alt="Placeholder"
            style={{ width: "400px", height: "500px" }}
          />
        </div>
        <h5 align="center">Microprocessor Based Harmful Algal Bloom Detection and Monitoring System</h5>
        <div className="paragraph-red-alert">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquet odio ac lacinia iaculis. Curabitur nisl dui, tempus eget
              laoreet a, accumsan at mauris. Aliquam eget scelerisque quam, et
              ullamcorper ex. Vestibulum feugiat quis nulla ac laoreet. Aenean
              aliquam id dolor ut congue. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. In hac
              habitasse platea dictumst. Vestibulum quis augue sit amet eros
              molestie dapibus ut vel neque. Suspendisse tortor neque, viverra
              non enim non, placerat auctor nibh. Vestibulum porta varius metus
              nec dignissim. Nam justo urna, tempor a ornare vel, vehicula sed
              metus. Nam rutrum varius nisl ac bibendum. Maecenas sit amet quam
              rhoncus, vehicula massa sed, blandit leo. Aenean quam lectus,
              feugiat vel lacinia vitae, interdum vitae lorem. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Ut viverra eros ut dui
              malesuada vestibulum. Vivamus suscipit nisl condimentum, tristique
              metus a, condimentum nulla. Sed volutpat scelerisque lectus eu pharetra. 
              Nulla imperdiet porttitor dui ut cursus. Quisque tempus neque at ligula 
              aliquam tempor. Donec id ligula efficitur, blandit erat quis,
              sodales neque. Integer at euismod urna, et mollis lorem. Pellentesque 
              imperdiet massa lacus, a vulputate enim tincidunt et. Aliquam quam augue,
              gravida in lorem eget, molestie laoreet ante. Cras pretium ipsum
              sodales, euismod nisl ut, blandit leo. Duis id finibus orci, et molestie dolor. 
              Phasellus ligula turpis, congue ut lorem et, imperdiet porttitor libero. 
              In luctus rhoncus lorem, in gravida est vulputate vitae. Morbi ullamcorper varius luctus. 
              Morbi augue ipsum, malesuada et mauris dictum, pretium laoreet
              justo. Etiam rutrum ligula elit, sed accumsan quam volutpat quis.
              Praesent et tempus augue, tristique varius eros. 
              Vivamus et nisl sodales, feugiat mi eu, lacinia felis. Phasellus
              lacinia facilisis ex. Proin fermentum blandit
              lorem nec faucibus. Nam lacinia sodales diam sed aliquam. Vivamus
              volutpat sapien velit, sed semper metus dignissim eu.
              Suspendisse cursus velit nec enim pellentesque, at imperdiet nisl
              commodo. Vivamus at erat ac ex fermentum sagittis
              quis nec turpis. Suspendisse ut mauris non mauris ornare gravida.
              Nunc posuere risus a justo imperdiet, nec dictum 
              dolor efficitur. Maecenas non hendrerit tellus. Curabitur quis
              feugiat ligula, eget imperdiet magna. Sed varius mi nec
              orci semper euismod. Nulla blandit sodales ipsum. Aliquam quis
              dapibus libero. Etiam sollicitudin venenatis augue vel tempor.
            </p>
        </div>
      </div>
    </div>
   
      
      <Footer />
    </div>
  );
};

export default redalert;
