import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Title } from "./styles";

type FilterProps = TouchableOpacityProps & FilterStyleProps & {
    title: string;
    isActive?: boolean;
}

function Filter({ title, isActive = false, ...rest }: FilterProps) {
    return (
        <Container {...rest} isActive={isActive}>
            <Title>
                {title}
            </Title>
        </Container>
    );
}

export default Filter;