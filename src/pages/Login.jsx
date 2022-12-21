import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
        center
        linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
        url("https://i.ibb.co/Z1Tg7Wg/Yellow-female-fashion-accessories-shoes-and-handbag-over-orange-background-Beauty-shopping-urban-out.jpg")
    ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 200px;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin-bottom: 20px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    background-color: teal; 
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 15px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>                    
                    <Input placeholder= "username"/>
                    <Input placeholder= "password"/>

                    <Button>LOGIN</Button>

                    <Link>DID YOU FORGET YOUR PASSWORD?</Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                </Form>
            </Wrapper>  
        </Container>
    )
}

export default Login
