import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { BackButton, ImageSlider, Accessory, Button } from '@shared';

import accelerationSvg from '../../assets/acceleration.svg';
import exchangeSvg from '../../assets/exchange.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import peopleSvg from '../../assets/people.svg';
import speedSvg from '../../assets/speed.svg';
import * as S from './styles';

export const CarDetails = () => {
    const { navigate, goBack } = useNavigation();

    function handleConfirmRental() {
        navigate('Scheduling');
    }

    return (
        <S.Container>
            <S.Header>
                <BackButton onPress={goBack} />
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

                <S.About>
                    Este é um automóvel esportivo. Surgiu do lendário touro de lide indultado na
                    praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de
                    acelerar.
                </S.About>
            </S.Content>

            <S.Footer>
                <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
            </S.Footer>
        </S.Container>
    );
};
