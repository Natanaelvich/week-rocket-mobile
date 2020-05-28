import styled from 'styled-components/native';

export const BackgrounWrapper = styled.View`
  background: #795fcf;
  flex: 1;
`;
export const Container = styled.View`
  background: #795fcf;
  flex: 1;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  background: #7159c1;
  elevation: 2;
`;
export const Button = styled.TouchableOpacity.attrs({
  hitSlop: { top: 5, bottom: 5, left: 10, right: 10 },
})``;
export const TeamTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
export const Content = styled.View``;
