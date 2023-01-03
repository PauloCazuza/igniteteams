import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type GroupCardProps = TouchableOpacityProps & {
    title: string;
};

function GroupCard({ title, ...rest }: GroupCardProps) {
    return (
        <Container {...rest}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    );
}

export default GroupCard;