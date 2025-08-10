import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { BallSpinner } from 'react-spinners-kit';
import { Grid } from 'react-awesome-spinners';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    return {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1]) || Math.floor(Math.random() * 1000)
                    };
                });
                setPhones(phonesWithFakeData);
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetching error:", err);
                setLoading(false); // hide spinner even if fetch fails
            });
    }, []);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4'>
            {loading ? (
                <div className="flex items-center justify-center h-96">
                    {/* <BallSpinner size={60} color="#4CAF50" loading={true} /> */}
                    <Grid
                        height='80'
                        width='80'
                        color='green'
                        ariaLabel = 'grid-loading'
                        radius='12.5'
                        wrapperStyle = {{}}
                        wrapperClass = ""
                        visible = {true}
                    />
                </div>
            ) : (
                <>
                    <h2 className='text-5xl mb-10'>{phones.length} iPhones</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <BarChart data={phones}>
                            <Bar dataKey="price" fill="#8884d8" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </BarChart>
                    </ResponsiveContainer>
                </>
            )}
        </div>
    );
};

export default Phones;
