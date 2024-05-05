import axios from 'axios';

import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
  } from 'chart.js';

import { Pie, Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { barData, barOptions, data, options } from '../../../chart.js/SelectedPlatform';
import { useRecoilState } from 'recoil';
import SelectPlatform from '../../../model/SelectPlatForm';
import { selectPlatform } from '../../../recoil/Atom';

ChartJS.register (
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale, 
    Title
);


function ErrorFindAverage() {

    const [selectedPlatformData, setSelectedPlatformData] = useRecoilState<SelectPlatform>(selectPlatform)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const androidResponse = await axios.get('http://localhost:50000/errorFind/avg/android');
                setSelectedPlatformData(prevData => ({ ...prevData, android: androidResponse.data}))

                const devopsResponse = await axios.get('http://localhost:50000/errorFind/avg/devops');
                setSelectedPlatformData(prevData => ({ ...prevData, devops: devopsResponse.data }));

                const webResponse = await axios.get('http://localhost:50000/errorFind/avg/web');
                setSelectedPlatformData(prevData => ({ ...prevData, web: webResponse.data }));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [setSelectedPlatformData]);
  

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Pie id="error-find-average-pie" data={data(selectedPlatformData)} options={options} />
                </div>

                <div>
                    <Bar id="error-find-average-bar" style={{ width: '560px', marginLeft: "120px" }} data={barData} options={barOptions} />
                </div>
            </div>
        </>
    )
}

export default ErrorFindAverage