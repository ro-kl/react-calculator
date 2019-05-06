import React from 'react';
import PropTypes from 'prop-types';

class Operator extends React.Component {
    render() {
        const {operator, handleOperator} = this.props;
        return (
            <div onClick={handleOperator}>
                {operator}
            </div>
        )
    }
}

Operator.propTypes = {
    operator: PropTypes.number.isRequired,
    handleOperator: PropTypes.func.isRequired,
};

export default Operator;
