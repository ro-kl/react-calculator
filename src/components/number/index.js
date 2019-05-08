import React from 'react';
import PropTypes from 'prop-types';

class Number extends React.Component {
    render() {
        const {number, handleNumber} = this.props;
        return (
            <div className="key" onClick={handleNumber}>
                {number}
            </div>
        )
    }
}

Number.propTypes = {
    number: PropTypes.number.isRequired,
    handleNumber: PropTypes.func.isRequired,
};

export default Number;
