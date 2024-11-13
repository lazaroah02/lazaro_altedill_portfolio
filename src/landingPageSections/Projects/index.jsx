import { projects } from "../../my-info.json";
import ProjectComponent from "../../components/ProjectComponent";
import SectionNameLabel from "../../components/SectionNameLabel";
import "../general-pages-styles.css";
import "./index.css";
import Collapsable from "../../components/Collapsable.tsx";

function Projects({ id }) {
  return (
    <section id={id} className="projects-content-container">

      <SectionNameLabel>Projects</SectionNameLabel>

      <Collapsable height={'500px'}>

        <ProjectComponent
            projectName={projects.krolNails.name}
            images={projects.krolNails.images}
            link={projects.krolNails.link}
            projectDescription={projects.krolNails.description}
            tecnologies={projects.krolNails.tecnologies}
        />

        <ProjectComponent
            projectName={projects.rredduct.name}
            images={projects.rredduct.images}
            link={projects.rredduct.link}
            projectDescription={projects.rredduct.description}
            tecnologies={projects.rredduct.tecnologies}
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

      </Collapsable>

    </section>
  );
}

export default Projects;
