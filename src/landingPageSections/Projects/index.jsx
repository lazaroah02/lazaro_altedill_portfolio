import { projects } from "@/my-info.json";
import ProjectComponent from "@/components/ProjectComponent";
import SectionNameLabel from "@/components/SectionNameLabel";
import "../general-pages-styles.css";
import "./index.css";
import Collapsable from "@/components/Collapsable";

function Projects({ id }) {
  return (
    <section id={id} className="projects-content-container">

      <SectionNameLabel>Projects</SectionNameLabel>

      <Collapsable height={'500px'}>

        <ProjectComponent
            projectName={projects.rredduct.name}
            images={projects.rredduct.images}
            link={projects.rredduct.link}
            projectDescription={projects.rredduct.description}
            tecnologies={projects.rredduct.tecnologies}
        />

        <ProjectComponent
            projectName={projects.english_vocabulary_manager.name}
            images={projects.english_vocabulary_manager.images}
            link={projects.english_vocabulary_manager.link}
            projectDescription={projects.english_vocabulary_manager.description}
            tecnologies={projects.english_vocabulary_manager.tecnologies}
        />

        <ProjectComponent
            projectName={projects.neonato.name}
            images={projects.neonato.images}
            link={projects.neonato.link}
            projectDescription={projects.neonato.description}
            tecnologies={projects.neonato.tecnologies}
        />

        <ProjectComponent
            projectName={projects.biodigestion.name}
            images={projects.biodigestion.images}
            link={projects.biodigestion.link}
            projectDescription={projects.biodigestion.description}
            tecnologies={projects.biodigestion.tecnologies}
        />

        <ProjectComponent
            projectName={projects.bm_company_shop.name}
            images={projects.bm_company_shop.images}
            link={projects.bm_company_shop.link}
            projectDescription={projects.bm_company_shop.description}
            tecnologies={projects.bm_company_shop.tecnologies}
        />

        <ProjectComponent
            projectName={projects.krolNails.name}
            images={projects.krolNails.images}
            link={projects.krolNails.link}
            projectDescription={projects.krolNails.description}
            tecnologies={projects.krolNails.tecnologies}
        />

      </Collapsable>

    </section>
  );
}

export default Projects;
