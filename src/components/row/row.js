import React, { Component } from 'react';

export default class Row extends Component {
    render() {
        const { leftPath, rightPath } = this.props;
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    {leftPath}
                </div>
                <div className="col-md-6">
                    {rightPath}
                </div>
            </div>
        );
    }
};
