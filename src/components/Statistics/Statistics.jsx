import { Container, Notification, Statistic, Title, Wrapper } from "./Statistics.styled";

const Statistics = ({good, neutral, bad, total, positivePercentage = '0'}) => {
    return (
        <Container>
            <Title>
                Statistics
            </Title>

            {total > 0 ? (
                <Wrapper>
                    <Statistic>Good: {good}</Statistic>
                    <Statistic>Neutral: {neutral}</Statistic>
                    <Statistic>Bad: {bad}</Statistic>
                    <Statistic>Total: {total}</Statistic>
                    <Statistic>Positive feedback: {positivePercentage}%</Statistic>
                </Wrapper>
                ) : (
                <Notification>
                    There is no feedback
                </Notification>
            )}
        </Container>
    )
};


export default Statistics;