import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

import { Car, Loading } from '@shared';

import { api } from '@services';

import Logo from '../../assets/logo.svg';
import { CarDTO } from '../../dtos/CarDTO';
import * as S from './styles';

export const Home = () => {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const { navigate } = useNavigation();

    function handleCarDetails() {
        navigate('CarDetails');
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response?.data);
            } catch (error) {
                console.log({ error });
            } finally {
                setLoading(false);
            }
        }

        fetchCars();
    }, []);

    return (
        <S.Container>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <S.Header>
                <S.HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)} />
                    <S.TotalCars>Total 12 carros</S.TotalCars>
                </S.HeaderContent>
            </S.Header>
            {loading ? (
                <Loading />
            ) : (
                <S.CarList
                    data={cars}
                    keyExtractor={(item) => item?.id}
                    renderItem={({ item }) => <Car data={item} onPress={handleCarDetails} />}
                />
            )}
        </S.Container>
    );
};
