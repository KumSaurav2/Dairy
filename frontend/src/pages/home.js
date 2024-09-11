import React, { useEffect, useContext } from 'react';
import DairyDetails from '../components/Dairy';
import { DairyContext } from '../reducer/DairyReducer';
import { PopUpContext } from '../context/PopUpContex';

const Home = () => {
    const {dairy, dispatch} = useContext(DairyContext);
    const{trigger} = useContext(PopUpContext);
    useEffect(() => {

        const fetchDairy = async () => {
            try {
                const response = await fetch('https://dairy-1-miw6.onrender.com/api/dairy');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                dispatch({type:'GET_DAIRY', payload: data})
            } catch (error) {
                console.error('Error fetching dairy data:', error);
            }
        };

        fetchDairy();
    }, [dispatch, trigger]);

    return (
        <div className='container'>
            <div className='dailyDairy'>
                {dairy.map((daily) => (
                    <DairyDetails key={daily._id} dailyDairy={daily} />
                ))}
            </div>
        </div>
    );
};

export default Home;
