import React from 'react';
import ReviewContent from '../customcomponent/content';
import Introduction from '../customcomponent/intro';
import LifeCycle from '../lifecycle/lifecycle';
import RemoteData from '../rest/remote';


class Examples extends React.Component {

    render() {
        return (
            <div>
                <h1>Examples</h1>
                <Introduction
                    name="prafful"
                    msg="Grascias!!!!"
                    lane="eight">
                    I am children props!
                </Introduction>
                <ReviewContent></ReviewContent>
                <hr></hr>
                <LifeCycle></LifeCycle>
                <hr></hr>
                <RemoteData></RemoteData>
            </div>
        );
    }
}

export default Examples;