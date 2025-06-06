import ImagesSlider from "@/components/ImagesSlider";
import "./index.css";

function ProjectComponent({
  projectName,
  role,
  images,
  projectDescription,
  link,
  tecnologies,
}) {
  return (
    <srticle className="project">
      <aside className="project-image">
        <ImagesSlider images={images} />
      </aside>
      <main className="project-description">
        <section className="project-description-text">
          <header translate="no">{projectName}</header>
          <span className = "role">{role}</span>
          {projectDescription}
          <div className="tecnologies-container">
            {tecnologies.map((tec) => (
              <img
                title={tec.name}
                key={tec.img}
                alt={tec.name}
                src={tec.img}
                width={30} height={30}
              />
            ))}
          </div>
        </section>
        <div className="project-description-buttons">
          {link !== "" ? (
            <a className="visit-site-button" title = {`Visit ${projectName} site`} href={link} target="_blank" rel="noopener noreferrer">
              Visit site
            </a>
          ) : null}
        </div>
      </main>
    </srticle>
  );
}

export default ProjectComponent;
