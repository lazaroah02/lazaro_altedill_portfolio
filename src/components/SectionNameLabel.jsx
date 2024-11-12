function SectionNameLabel({children}) {
  return (
    <div style = {styles.projectsCategory}>
      <div style = {styles.projectsCategoryDiv}>{children}</div>
    </div>
  );
}

export default SectionNameLabel;

const styles = {
    projectsCategory:{
        width:'100%',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: "flex-end",
    },
    projectsCategoryDiv:{
        color: "#fff",
        width: "120px",
        padding: "8px",
        borderBottomLeftRadius: "10px",
        borderTopLeftRadius: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        fontFamily: 'Jost',
    }
}
