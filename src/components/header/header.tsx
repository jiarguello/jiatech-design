import React, { FC, HTMLAttributes } from 'react';
import * as S from './styles';

export interface NavigationOption {
  label: string;
  redirectPath: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  logoImage?: string;
  navigationOptions?: NavigationOption;
  style?: React.CSSProperties;
}

export const Header: FC<Props> = (props) => {
  return (
    <S.HeaderContainer style={props.style}>
      {props.logoImage !== undefined ? (
        <S.ImageContainer>
          <img src={props.logoImage} />
        </S.ImageContainer>
      ) : null}
      {}
    </S.HeaderContainer>
  );
};
