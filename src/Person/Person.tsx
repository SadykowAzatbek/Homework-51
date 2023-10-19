import React from "react";

interface Props{
    number: number;
}

const Person: React.FC<Props> = ({number}) => {
    return (
        <div className="circle">{number}</div>
    )
};

export default Person;