import { Container, Logo } from "./styles";
import logoImg from "@assets/logo/logo.png";

function Header() {
    return (
        <Container>
            <Logo source={logoImg} />
        </Container>
    );
}

export default Header;