export default function Props(props) {
  return (
    <>
      <div style={{ backgroundColor: "skyblue", margin: 40 }}>
        <h1>About Props</h1>
        <h2>Name : {props.name}</h2>
        <h3>E-mail : {props.email}</h3>
        <h4>Address : {props.other.address}</h4>
      </div>
    </>
  );
}
