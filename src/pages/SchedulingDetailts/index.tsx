import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { BackButton, ImageSlider, Accessory, Button } from '@shared';

import accelerationSvg from '../../assets/acceleration.svg';
import exchangeSvg from '../../assets/exchange.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import peopleSvg from '../../assets/people.svg';
import speedSvg from '../../assets/speed.svg';
import * as S from './styles';

export const SchedulingDetailts = () => {
    const theme = useTheme();
    const { navigate, goBack } = useNavigation();

    function handleConfirmRental() {
        navigate('SchedulingComplete');
    }
    return (
        <S.Container>
            <S.Header>
                <BackButton onPress={() => {}} />
            </S.Header>

            <S.CarImages>
                <ImageSlider
                    imagesUrl={[
                        'https://www.webmotors.com.br/imagens/prod/347515/PORSCHE_PANAMERA_4.0_V8_EHYBRID_TURBO_S_PDK_34751514483037419.png?s=fill&w=130&h=97&q=70&t=true)',
                    ]}
                />
            </S.CarImages>

            <S.Content>
                <S.Details>
                    <S.Description>
                        <S.Brand>Lamborghini</S.Brand>
                        <S.Name>Huracan</S.Name>
                    </S.Description>

                    <S.Rent>
                        <S.Period>Ao dia</S.Period>
                        <S.Price>R$ 500</S.Price>
                    </S.Rent>
                </S.Details>

                <S.Acessories>
                    <Accessory name="300Km/h" icon={speedSvg} />
                    <Accessory name="3.2s" icon={accelerationSvg} />
                    <Accessory name="800 HP" icon={forceSvg} />
                    <Accessory name="Gasolina" icon={gasolineSvg} />
                    <Accessory name="Auto" icon={exchangeSvg} />
                    <Accessory name="2 pessoas" icon={peopleSvg} />
                </S.Acessories>

                <S.RentalPeriod>
                    <S.CalendarIcon>
                        <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
                    </S.CalendarIcon>

                    <S.DateInfo>
                        <S.DateTitle>DE</S.DateTitle>
                        <S.DateValue>18/06/2021</S.DateValue>
                    </S.DateInfo>

                    <Feather name="chevron-right" size={RFValue(24)} color={theme.colors.text} />

                    <S.DateInfo>
                        <S.DateTitle>ATÉ</S.DateTitle>
                        <S.DateValue>18/06/2021</S.DateValue>
                    </S.DateInfo>
                </S.RentalPeriod>

                <S.RentalPrice>
                    <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
                    <S.RentalPriceDetails>
                        <S.RentalPriceQuota>R$ 580 x3 diárias</S.RentalPriceQuota>
                        <S.RentalPriceTotal>R$ 2.900</S.RentalPriceTotal>
                    </S.RentalPriceDetails>
                </S.RentalPrice>
            </S.Content>

            <S.Footer>
                <Button
                    title="Alugar agora"
                    color={theme.colors.success}
                    onPress={handleConfirmRental}
                />
            </S.Footer>
        </S.Container>
    );
};
