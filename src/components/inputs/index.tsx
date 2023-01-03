import { TextInputProps } from "react-native";
import { Container } from "./style";
import { useTheme } from "styled-components/native";

function Input({ ...rest }: TextInputProps) {
    const { COLORS } = useTheme();

    return (
        <Container
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    );
}

export default Input;