import { connect } from "react-redux";
import { useState, useEffect } from "react";

export const Question = (props) => {
    let key = 0
    // const [key, setKey] = useState(0);
    const [qa, setQa] = useState(props.questions[key]);

    const handleNext = () => {
        console.log('------>', key);
        key += 1;
        // setKey(key + 1);
        console.log('------>>', key);
        setQa(props.questions[key]);
    }
    
    const handlePrev = () => {
        key -= 1;
        // setKey(key - 1);
        setQa(props.questions[key]);
    }
    
    useEffect(() => {});

    return (
        <div>
            {
                <div key={qa.id}>
                    <p>{qa.id}). {qa.question}</p>
                    <span>{qa.answer}</span>
                    <hr/>
                    <br></br>
                </div>
            }
            <button onClick={handlePrev}>{`<< Prev`}</button>
            <button onClick={handleNext}>{`Next >>`}</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        questions: state.question
    }
}

export default connect(mapStateToProps)(Question);
