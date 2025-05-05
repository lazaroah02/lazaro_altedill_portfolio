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
            role = {projects.printai_technical_interview.role}
            projectName={projects.printai_technical_interview.name}
            images={projects.printai_technical_interview.images}
            link={projects.printai_technical_interview.link}
            projectDescription={projects.printai_technical_interview.description}
            tecnologies={projects.printai_technical_interview.tecnologies}
        />
        <ProjectComponent
            role = {projects.esther_online_catalog.role}
            projectName={projects.esther_online_catalog.name}
            images={projects.esther_online_catalog.images}
            link={projects.esther_online_catalog.link}
            projectDescription={projects.esther_online_catalog.description}
            tecnologies={projects.esther_online_catalog.tecnologies}
        />
        <ProjectComponent
            role = {projects.google_maps_scrape.role}
            projectName={projects.google_maps_scrape.name}
            images={projects.google_maps_scrape.images}
            link={projects.google_maps_scrape.link}
            projectDescription={projects.google_maps_scrape.description}
            tecnologies={projects.google_maps_scrape.tecnologies}
        />
        
        <ProjectComponent
            role = {projects.rredduct.role}
            projectName={projects.rredduct.name}
            images={projects.rredduct.images}
            link={projects.rredduct.link}
            projectDescription={projects.rredduct.description}
            tecnologies={projects.rredduct.tecnologies}
        />

        <ProjectComponent
            role = {projects.english_vocabulary_manager.role}
            projectName={projects.english_vocabulary_manager.name}
            images={projects.english_vocabulary_manager.images}
            link={projects.english_vocabulary_manager.link}
            projectDescription={projects.english_vocabulary_manager.description}
            tecnologies={projects.english_vocabulary_manager.tecnologies}
        />

        <ProjectComponent
            role = {projects.neonato.role}
            projectName={projects.neonato.name}
            images={projects.neonato.images}
            link={projects.neonato.link}
            projectDescription={projects.neonato.description}
            tecnologies={projects.neonato.tecnologies}
        />

        <ProjectComponent
            role = {projects.biodigestion.role}
            projectName={projects.biodigestion.name}
            images={projects.biodigestion.images}
            link={projects.biodigestion.link}
            projectDescription={projects.biodigestion.description}
            tecnologies={projects.biodigestion.tecnologies}
        />

        <ProjectComponent
            role = {projects.bm_company_shop.role}
            projectName={projects.bm_company_shop.name}
            images={projects.bm_company_shop.images}
            link={projects.bm_company_shop.link}
            projectDescription={projects.bm_company_shop.description}
            tecnologies={projects.bm_company_shop.tecnologies}
        />

        <ProjectComponent
            role = {projects.sigipo.role}
            projectName={projects.sigipo.name}
            images={projects.sigipo.images}
            link={projects.sigipo.link}
            projectDescription={projects.sigipo.description}
            tecnologies={projects.sigipo.tecnologies}
        />

        <ProjectComponent
            role = {projects.krolNails.role}
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
