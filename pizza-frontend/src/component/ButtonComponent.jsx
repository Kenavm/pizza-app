import "./ButtonComponent.css";

export default function ButtonComponent(props) {
  return <button onClick={props.this} className={props.buttonClassName}>{props.buttonName}</button>;
}
