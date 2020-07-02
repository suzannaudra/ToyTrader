import React, { Component } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import { Drawer, toggleDrawer } from '@material-ui/core';

export default class SearchFunction extends Component {
    render() {
        return (
            <div>
                {
                    ['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))
                }
            </div>
        )
    }
}

