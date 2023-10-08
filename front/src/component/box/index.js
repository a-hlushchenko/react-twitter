import "./index.css";

export default function Component({ children, classname, style = {} }) {
  return (
    <div style={style} className={`box ${classname}`}>
      {children}
    </div>
  );
}
