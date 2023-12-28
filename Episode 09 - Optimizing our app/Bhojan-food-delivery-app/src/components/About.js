import AboutBanner from "./classComponents/AboutBanner";
import ClassCounterApp from "./classComponents/ClassCounterApp";
import ClassParent from "./classComponents/ClassParent";

export const About = () => {
  return (
    <div className="about-container">
      <AboutBanner name="Tanish!" intro="Hi I'm" />
      <section className="intro">
        <h1>Introduction to class based component in React</h1>
        <ClassCounterApp appName={"Counter App (Class based component)"} />
      </section>
      <section className="intro">
        <h1>Let's look at Component Lifecycle</h1>
        <ClassParent />
      </section>
    </div>
  );
};
