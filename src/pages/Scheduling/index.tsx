import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { BackButton, Button, Calendar } from '@shared';

import ArrowSvg from '../../assets/arrow.svg';
import * as S from './styles';

export const Scheduling = () => {
    const theme = useTheme();
    const { navigate, goBack } = useNavigation();

    function handleConfirmRental() {
        navigate('SchedulingDetailts');
    }

    return (
        <S.Container>
            <S.Header>
                <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
                <BackButton onPress={() => goBack()} color={theme.colors.shape} />

                <S.Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </S.Title>

                <S.RentalPeriod>
                    <S.DateInfo>
                        <S.DateTitle>DE</S.DateTitle>
                        <S.DateValueContainer selected={false}>
                            <S.DateValue>18/06/2021</S.DateValue>
                        </S.DateValueContainer>
                    </S.DateInfo>

                    <ArrowSvg />

                    <S.DateInfo>
                        <S.DateTitle>ATÉ</S.DateTitle>
                        <S.DateValueContainer selected={false}>
                            <S.DateValue>18/06/2021</S.DateValue>
                        </S.DateValueContainer>
                    </S.DateInfo>
                </S.RentalPeriod>
            </S.Header>

            <S.Content>
                <Calendar />
            </S.Content>

            <S.Footer>
                <Button title="Confirmar" onPress={handleConfirmRental} />
            </S.Footer>
        </S.Container>
    );
};
