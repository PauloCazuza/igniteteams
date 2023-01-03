import { Container, SubTitle, Title } from "./styles";

type HighlightProps = {
    title: string;
    subtitle: string;
}

function HighLight({ title, subtitle }: HighlightProps) {
    return (
        <Container>
            <Title>
                {title}
            </Title>

            <SubTitle>
                {subtitle}
            </SubTitle>
        </Container>
    );
}

export default HighLight;