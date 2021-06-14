import React from 'react';

const CourseHeader = (props) => {
    const {title, description} = props;
    return (
        <div className="mt-5 pt-5">
            <h6>{title}</h6>
            <p style={{color : 'gray'}}>{description}</p>
        </div>
    );
};

export default CourseHeader;