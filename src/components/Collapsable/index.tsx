import { useState, type ReactNode } from "react";
import UpArrow from "@/assets/icons/up-arrow-white.svg";
import { navigate } from "astro:transitions/client";
import './index.css'

function Collapsable({
  children,
  height,
}: {
  children: ReactNode;
  height: string;
}) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <section className = "collapsible">
      <div
        style={{
          overflowY: "hidden",
          height: `${collapsed ? height : "auto"}`,
        }}
      >
        {children}
      </div>
      <button
        className = "collapsible-button"
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
        <span>{collapsed ? "More Projects" : "Less"}</span>
      </button>
    </section>
  );
}

export default Collapsable;
