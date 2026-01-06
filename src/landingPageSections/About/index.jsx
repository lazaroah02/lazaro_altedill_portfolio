import { aboutMe, education } from "@/my-info.json";
import Paragraph from "@/components/Paragraph";
import SectionNameLabel from "@/components/SectionNameLabel";
import "../general-pages-styles.css";
import "./index.css";

function About({ id }) {
  return (
    <section id={id} className="about-content-container">
      <SectionNameLabel>About</SectionNameLabel>
      <Paragraph title={aboutMe.title}>
        {aboutMe.content.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </Paragraph>
      <Paragraph title={education.title}>
        <Paragraph
          type={"sub-paragraph"}
          title={education.content.education1.title}
          content={education.content.education1.content}
        />
        <Paragraph
          type={"sub-paragraph"}
          title={education.content.education2.title}
          content={education.content.education2.content}
        />
        <Paragraph
          type={"sub-paragraph"}
          title={education.content.education3.title}
          content={education.content.education3.content}
        >
          . Here some{" "}
          <a className="see-certificates-button" href="/certificates">
            Certificates
          </a>{" "}
          that I've obtained.
        </Paragraph>
      </Paragraph>
    </section>
  );
}

export default About;
