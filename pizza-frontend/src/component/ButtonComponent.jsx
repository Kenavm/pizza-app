import "./ButtonComponent.css";

export default function ButtonComponent(props) {
  return <button className={props.buttonClassName}>{props.buttonName}</button>;
}
