import { Container, FormContainer, InnerContainer } from "./styles"
import Logo from '../../assets/images/android-chrome-512x512.png';
export default function Enroll() {
    return (

        <Container>
            <InnerContainer>
                <div>
                    <h2> Let's Play </h2>
                    <h3> The website </h3>
                    <h3> to encounter </h3>
                    <h3> new friends </h3>
                    <h3> and play sports! </h3>
                </div>
            </InnerContainer>
            <InnerContainer>
                <FormContainer>
                    <img src={Logo} alt="Ilustration of sportists playing sports" />
                </FormContainer>
            </InnerContainer>
        </Container >
    )
}