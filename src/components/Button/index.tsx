import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
}

function Button({ type = "PRIMARY", title, ...rest }: ButtonProps) {
    return (
        <Container type={type} {...rest} >
            <Title>
                {title}
            </Title>
        </Container>
    );
}

export default Button;