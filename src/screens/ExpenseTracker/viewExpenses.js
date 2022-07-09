import Table from "../../components/Table/index";
import { connect } from "react-redux";
import BackNavigation from "../../components/BackNavigation";
import { Row, Col, Container } from "react-bootstrap";

function ViewExpenses(props) {
  const { expenseList, total } = props;
  const headers = [
    {
      label: "category",
      value: "Category",
    },
    {
      label: "expenseDate",
      value: "Expense Date",
    },
    {
      label: "expenseName",
      value: "Expense Name",
    },
    {
      label: "expenseAmount",
      value: "Expense Amount",
    },
  ];

  return (
    <Container fluid className="expense-container">
      <BackNavigation title={"View Expenses"} navigateTo={"/expenseTracker"} />
      <Row>
        <Col xs={12} sm={12} lg={12} md={12}>
          <div className="view-expense-list">
            <Table
              headers={headers}
              data={expenseList}
              editable={true}
              displayTotal={true}
              total={total}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    expenseList: state.expense.list,
    total: state.expense.total,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ViewExpenses);
