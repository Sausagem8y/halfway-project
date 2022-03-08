import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
// import ReactDOM from './react-dom';
import React from "react";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onOkay}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onOkay}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

// const ErrorModal = (props) => {
//     return (
//         <React.Fragment>
//             {ReactDOM.createPortal(<Backdrop onOkay={props.onOkay} />)}
//         </React.Fragment>
//     )
// }

export default ErrorModal;
