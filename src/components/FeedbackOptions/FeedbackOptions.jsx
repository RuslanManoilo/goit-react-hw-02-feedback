const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <div className="feedback">
            <h2>Please leave feedback</h2>

            {options.map(option => (
                <button id={option} key={option} onClick={onLeaveFeedback}>
                    {option}
                </button>)
            )}
        </div>
    )
};


export default FeedbackOptions;