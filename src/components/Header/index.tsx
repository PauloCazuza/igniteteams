import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from "@assets/logo/logo.png";
import { CaretLeft } from "phosphor-react-native";

type HeaderProps = {
    showBackButton?: boolean;
}

function Header({ showBackButton = false }: HeaderProps) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    );
}

export default Header;