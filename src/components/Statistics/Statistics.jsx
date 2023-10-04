const Statistics = ({good, neutral, bad, total, positivePercentage = '0'}) => {
    return (
        <div className="statistics">
            <h2>Statistics</h2>

            {total > 0 ? (
                <div>
                    <span>Good: {good}</span>
                    <span>Neutral: {neutral}</span>
                    <span>Bad: {bad}</span>
                    <span>Total: {total}</span>
                    <span>Positive feedback: {positivePercentage}%</span>
                </div>
            ) : (
                <p>There is no feedback</p>
            )}

            

        </div>
    )
};


export default Statistics;