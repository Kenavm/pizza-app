import "./ButtonComponent.css";

export default function ButtonComponent(props) {
  return <button onClick={props.onClick} className={props.buttonClassName}>{props.buttonName}</button>;
}
