import clsx from "clsx";
import css from "./Section.module.css";
const Section = ({ children, className,id }) => {
  return <section id={id} className={clsx(css.section, className) } >{children}</section>;
};

export default Section;
