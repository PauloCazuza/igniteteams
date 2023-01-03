import ButtonIcon from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type PlayerCardProps = {
    name: string;
    onRemove: VoidFunction;
}

function PlayerCard({ name, onRemove }: PlayerCardProps) {
    return (
        <Container>
            <Icon
                name="person"
            />

            <Name>
                {name}
            </Name>

            <ButtonIcon
                icon="close"
                type="SECONDARY"
                onPress={onRemove}
            />
        </Container>
    );
}

export default PlayerCard;