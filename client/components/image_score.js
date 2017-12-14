import React from 'react';

const ImageScore = (props) => {
    const {ups, downs} = props;
    // or const ups = props.ups; and const downs = props.downs;

    const upsPercent = `${100 * (ups/(ups+downs))}%`;
    const downsPercent = `${100 * (downs/(ups+downs))}%` ;
    console.log(upsPercent);
    console.log(downsPercent);
    return(
        <div>
            Ups/Downs
            <div className="progress">
                <div style={{ width:upsPercent }} className="progress-bar progress-bar-success progress-bar-striped"/>
                <div style={{ width:downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped"/>
            </div>
        </div>

    );
}

export default ImageScore;