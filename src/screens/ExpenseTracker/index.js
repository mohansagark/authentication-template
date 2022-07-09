import "./styles.scss";
import { connect } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { capitalize, validateAlphabets, validateNumber } from "../../helpers/general";
import { setExpenseList } from "../../store/actions/expense.actions";
import BackNavigation from "../../components/BackNavigation";
import { Row, Col, Container, Button } from "react-bootstrap";

const ExpenseTracker = (props) => {
  const { addExpense } = props;
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const options = [
    {
      label: "Daily Products",
      value: "dailyProducts",
    },
    {
      label: "Power Bill",
      value: "powerBill",
    },
    {
      label: "Groceries",
      value: "groceries",
    },
    {
      label: "House Rent",
      value: "houseRent",
    },
    {
      label: "Others",
      value: "others",
    },
  ];

  const clearForm = () => {
    setAmount("");
    setCategory("");
    setDate("");
    setName("");
  };

  const notify = () => {
    if (name && amount && date && category) {
      toast.success(`${name} is added to the Expense List!`);
      clearForm();
      const payload = {
        expenseName: capitalize(name),
        category: category,
        expenseDate: date,
        expenseAmount: amount,
      };
      addExpense(payload);
    }
  };
  const handleName = (e) => {
    if (validateAlphabets(e)) {
      setName(e);
    }
  };

  const handleAmount = (e) => {
    if (validateNumber(e)) {
      setAmount(e);
    }
  };

  return (
    <Container fluid className="expense-container">
      <BackNavigation title={"Expense Tracker"} />
      <Row className="expense-tracker">
        <Col lg={2} md={2} />
        <Col lg={8} md={8}>
          <Row className="alignCenter">
            <Col lg={2} md={1} />
            <Col lg={2} md={3} className="form-group">
              <label>Expense Name</label>
            </Col>
            <Col lg={5} md={7} className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Expense Name"
                value={name}
                onChange={(e) => handleName(e.target.value)}
              />
            </Col>
            <Col lg={3} md={1} />
          </Row>

          <Row className="alignCenter">
            <Col lg={2} md={1} />
            <Col lg={2} md={3} className="form-group">
              <label>Expense Cost</label>
            </Col>
            <Col lg={5} md={7} className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Expense Cost"
                value={amount}
                onChange={(e) => handleAmount(e.target.value)}
              />
            </Col>
            <Col lg={3} md={1} />
          </Row>

          <Row className="alignCenter">
            <Col lg={2} md={1} />
            <Col lg={2} md={3} className="form-group">
              <label>Category</label>
            </Col>
            <Col lg={5} md={7}>
              <select
                className="form-control form-select form-select-lg mb-3 form-group"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value={""} disabled className="options">
                  Choose category
                </option>
                {options.map((option, index) => (
                  <option
                    value={option.value}
                    key={String(index)}
                    className="options"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </Col>
            <Col lg={3} md={1} />
          </Row>

          <Row className="alignCenter">
            <Col lg={2} md={1} />
            <Col lg={2} md={3} className="form-group">
              <label>Expense Date</label>
            </Col>
            <Col lg={5} md={7} className="form-group date">
              <input
                type="date"
                className="form-control"
                value={date}
                max={moment().format("yyyy-MM-DD")}
                onChange={(e) => setDate(e.target.value)}
              />
            </Col>
            <Col lg={3} md={1} />
          </Row>

          <Row>
            <Col lg={4} md={5} />
            <Col lg={5} md={4}>
              <Row>
                <Col lg={4} md={4} />
                <Col lg={4} md={7}>
                  <Button
                    type="submit"
                    className="btn btn-md btn-primary expense-submit"
                    onClick={notify}
                  >
                    Submit
                  </Button>
                </Col>

                <Col lg={4} md={1} />
              </Row>
              <Col lg={3} md={3} />
            </Col>
          </Row>

          <Row>
            <Col lg={7} md={9} />
            <Col lg={2} md={2} className="view-anchorTag">
              <a href="viewExpenses">View Expense</a>
            </Col>
            <Col lg={3} md={1} />
          </Row>
        </Col>
        <Col lg={3} md={3} />
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => {
    dispatch(setExpenseList(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTracker);
