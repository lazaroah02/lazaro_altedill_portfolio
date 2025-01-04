import './index.css'

function SectionNameLabel({children}) {
    return (
      <section className = "section-name-label">
        <div className = "section-name-label-text">{children}</div>
      </section>
    );
  }
  
  export default SectionNameLabel;
  
  