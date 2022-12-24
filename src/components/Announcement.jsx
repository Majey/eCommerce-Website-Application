import styled from "styled-components"

const Container = styled.div`
    height: 40px;
    background-color: #FFA500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
`;

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free delivery on Orders Above KSH5,000
        </Container>
    )
}

export default Announcement
