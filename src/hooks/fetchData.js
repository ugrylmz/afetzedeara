import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    console.log('useFetch url', url);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorDetails, setErrorDetails] = useState(null);

    useEffect(() => {
        console.log('error', error);
    }, [error]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(url);
                console.log(res.data);
                setData(res?.data);
            } catch (err) {
                console.log(JSON.stringify(err));
                setError(true);
                setErrorDetails(err);

            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);


    const reFetch =  async () => {
        setLoading(true);
        try {
            setLoading(true);
            const res = await axios.get(url);
            setData(res?.data);
        } catch (err) {
            setError(true);
            setErrorDetails(err);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, reFetch, errorDetails };
};

export default useFetch;


