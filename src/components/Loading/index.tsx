import { Text } from "react-native";
import { Container, LoadIndicator } from "./styled";

function Loading() {
    return (
        <Container>
            <LoadIndicator />
        </Container>
    );
}

export default Loading;