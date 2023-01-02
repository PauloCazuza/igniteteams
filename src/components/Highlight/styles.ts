import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SubTitle = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;