import { useState, type ReactNode } from "react";
import UpArrow from "@/assets/icons/up-arrow-white.svg";
import { navigate } from "astro:transitions/client";

function Collapsable({
  children,
  height,
}: {
  children: ReactNode;
  height: string;
}) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <section style={styles.container}>
      <div
        style={{
          overflowY: "hidden",
          height: `${collapsed ? height : "auto"}`,
        }}
      >
        {children}
      </div>
      <button
        style={styles.button}
        onClick={() => {
          navigate("#projects");
          setCollapsed(!collapsed);
        }}
      >
        <img
          src={UpArrow.src}
          alt="Up Arrow"
          style={collapsed ? { rotate: "180deg" } : null}
        />
        {collapsed ? "More Projects" : "Less"}
      </button>
    </section>
  );
}

export default Collapsable;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  button: {
    minWidth:"60px",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color:"#fff",
    border:'1px solid #fff',
    borderRadius:"15px",
    fontFamily:"Raleway",
    padding:"5px 15px 5px 15px",
  },
};
