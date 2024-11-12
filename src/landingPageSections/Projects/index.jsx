import { projects } from "../../my-info.json";
import ProjectComponent from "../../components/ProjectComponent";
import SectionNameLabel from "../../components/SectionNameLabel";
import "../general-pages-styles.css";
import "./index.css";

function Projects({ id }) {
  return (
    <section id={id} className="projects-content-container">

      <SectionNameLabel>Projects</SectionNameLabel>

      <ProjectComponent
        projectName={projects.krolNails.name}
        images={projects.krolNails.images}
        link={projects.krolNails.link}
        projectDescription={projects.krolNails.description}
        tecnologies={projects.krolNails.tecnologies}
      />

      <ProjectComponent
        projectName={projects.gummawaka.name}
        images={projects.gummawaka.images}
        link={projects.gummawaka.link}
        projectDescription={projects.gummawaka.description}
        tecnologies={projects.gummawaka.tecnologies}
      />

      <ProjectComponent
        projectName={projects.greennotes.name}
        images={projects.greennotes.images}
        link={projects.greennotes.link}
        projectDescription={projects.greennotes.description}
        tecnologies={projects.greennotes.tecnologies}
      />

      <ProjectComponent
        projectName={projects.bestore.name}
        images={projects.bestore.images}
        link={projects.bestore.link}
        projectDescription={projects.bestore.description}
        tecnologies={projects.bestore.tecnologies}
      />

    </section>
  );
}

export default Projects;
