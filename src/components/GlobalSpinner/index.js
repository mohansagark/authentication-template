import React from "react";
import { Spinner, Modal } from "react-bootstrap";
import "./spinner.scss";
import { connect } from "react-redux";

const GobalSpinner = (props) => {
  const { loader, theme } = props;
  return loader ? (
    <Modal
      show={loader}
      dialogClassName="modal-spinner"
      backdrop="static"
      keyboard={false}
      backdropClassName={"spinnerBackdrop"}
      centered
    >
      <Spinner
        animation="border"
        className={theme === "dark" ? "spinnerLg spinnerLgDark" : "spinnerLg"}
      />
    </Modal>
  ) : null;
};

const mapStateToProps = (state) => ({
  loader: state.general.loader,
});

export default connect(mapStateToProps, null)(GobalSpinner);
