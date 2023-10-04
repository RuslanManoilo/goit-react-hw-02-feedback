import { Btn, Container, Title } from "./FeedbackOptions.styled";

const FeedbackOptions = ({onLeaveFeedback, options, title}) => {
    return (
        <Container>
            <Title>
                Please leave feedback
            </Title>

            {options.map(option => (
                <Btn id={option} key={option} onClick={onLeaveFeedback}>
                    {(option).toUpperCase()}
                </Btn>)
            )}
        </Container>
    )
};


export default FeedbackOptions;