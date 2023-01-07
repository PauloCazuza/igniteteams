import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from "@assets/logo/logo.png";
import { CaretLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
    showBackButton?: boolean;
}

function Header({ showBackButton = false }: HeaderProps) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate("groups");
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack} >
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container >
    );
}

export default Header;