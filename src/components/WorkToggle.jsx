import "../style/work.css";

const WorkToggle = ({ category, setCategory }) => {
  return (
    <div className="toggle-wrapper">
      <button
        className={category === "dev" ? "toggle active" : "toggle"}
        onClick={() => setCategory("dev")}
      >
        Full Stack
      </button>

      <button
        className={category === "design" ? "toggle active" : "toggle"}
        onClick={() => setCategory("design")}
      >
        Graphic Designer
      </button>
    </div>
  );
};

export default WorkToggle;
