import ImagesSlider from "@/components/ImagesSlider";
import "./index.css";

function ProjectComponent({
  projectName,
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
          {projectDescription}
          <div className="tecnologies-container">
            {tecnologies.map((tec) => (
              <img
                title={tec.name}
                key={tec.img}
                alt={tec.name}
                src={tec.img}
              />
            ))}
          </div>
        </section>
        <div className="project-description-buttons">
          {link !== "" ? (
            <a className="visit-site-button" href={link} target="_blank">
              Visit site
            </a>
          ) : null}
        </div>
      </main>
    </srticle>
  );
}

export default ProjectComponent;
