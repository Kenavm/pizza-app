function Authentication(props) {
  return (
    <div>
      <h1>Please put in the password</h1>
      <input type="password" onChange={(e) => props.onSetPassword(e.target.value)}></input>
    </div>
  );
}

export default Authentication;
