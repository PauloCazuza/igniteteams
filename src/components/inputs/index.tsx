import { TextInputProps } from "react-native";
import { Container } from "./style";

function Input({ ...rest }: TextInputProps) {
    return (
        <Container
            {...rest}
        />
    );
}

export default Input;