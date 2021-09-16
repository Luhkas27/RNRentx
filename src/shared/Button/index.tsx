import React from 'react';

import { useTheme } from 'styled-components';

import * as S from './styles';

interface Props {
    title: string;
    color?: string;
    onPress: () => void;
}

export const Button = ({ title, color, onPress }: Props) => {
    const theme = useTheme();
    return (
        <S.Container onPress={onPress} color={color ? color : theme.colors.main}>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
};
