import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleProps;
}

function ButtonIcon({ icon, type = "PRIMARY" }: ButtonIconProps) {
    return (
        <Container>
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    );
}

export default ButtonIcon;