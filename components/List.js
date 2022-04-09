import React, {Suspense} from 'react';
import { ScrollView } from 'react-native';
import Card from './Card';
import useSWR from "swr";
import { Text, SafeAreaView } from 'react-native';

export default function List() {

    const { data } = useSWR('https://randomuser.me/api/?results=3');
    
    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 100,
                }} 
            >
                {data.results.map((user, index) => (
                    <Card key={index} name={user.name.first} picture={user.picture.large}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}