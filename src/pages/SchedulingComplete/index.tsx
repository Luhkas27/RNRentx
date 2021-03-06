import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ConfirmButton } from '@shared';

import DoneSvg from '../../assets/done.svg';
import LogoSvg from '../../assets/logo_background_gray.svg';
import * as S from './styles';

export const SchedulingComplete = () => {
    const { width } = useWindowDimensions();
    const { navigate } = useNavigation();

    function handleConfirm() {
        navigate('Home');
    }
    return (
        <S.Container>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <LogoSvg width={width} />

            <S.Content>
                <DoneSvg width={80} height={80} />
                <S.Title>Carro alugado</S.Title>

                <S.Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </S.Message>
            </S.Content>

            <S.Footer>
                <ConfirmButton title="OK" onPress={handleConfirm} />
            </S.Footer>
        </S.Container>
    );
};
