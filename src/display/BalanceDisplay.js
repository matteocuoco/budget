import React from 'react';
import { BudgetConsumer } from '../store';

const BalanceDisplay = () => {
    return (
        <BudgetConsumer>
            {value => {
                const totalExpenses = value.expenses.length > 0 ? (
                    value.expenses.reduce((acc, curr) => {
                        acc += parseInt(curr.amount)
                        return acc
                    }, 0)) : 0;

                    return (

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">Budget</div>
                                    <div className="card-body">
                                        <h5 className="text-center card-title">{value.budget}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">Expenses</div>
                                    <div className="card-body">
                                        <h5 className="text-center card-title">{totalExpenses}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">Balance</div>
                                    <div className="card-body">
                                        <h5 className="text-center card-title">{value.budget - totalExpenses}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }}
        </BudgetConsumer>
    )
}

export default BalanceDisplay
