import { Element } from "react-scroll";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex">
            {[
              {
                icon: "test",
                caption: "caption",
                caption: "caption",
                caption: "caption",
              },
              {
                icon: "test",
                caption: "caption",
                caption: "caption",
                caption: "caption",
              },
            ]}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
