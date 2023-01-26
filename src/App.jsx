/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import { React, useEffect, useState } from 'react'
import './App.css'
import UserPage from './Components/UserPage/UserPage';
import Header from './Components/Header/Header'
import Loading from './Components/Common/Loading/Loading'
import SignInOffer from './Components/SignInOffer/SignInOffer';
import Footer from './Components/Footer/Footer'
import Error from '@Components/Common/Error/Error';

import { fetchUser } from '@Redux/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom';

import defaultBackground from '@Assets/bg2.jpg';
import { getCurrentItemBgUrl } from '@Redux/itemsSlice';

function App() {

    const dispatch = useDispatch();

    const fetchStatus = useSelector(state => state.user.status);
    const user = useSelector(state => state.user.data);
    const errorMessage = useSelector(state => state.user.error);

    const isLoading = fetchStatus === 'loading';

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (user && location.pathname === '/') {
            navigate('/equipment', { replace: true });
        }
    }, [user, location, navigate]);

    useEffect(() => {
        document.title = user ? `${user.main.name}'s Destiny 2 Loot Manager` : 'Destiny 2 Loot Manager';
    }, [user, dispatch]);

    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchUser());
        }
    }, [user, fetchStatus, dispatch]);


    const currentItemBgSrc = useSelector(getCurrentItemBgUrl);
    const [bgSrc, setBgSrc] = useState(defaultBackground);

    useEffect(() => {
        const bg = currentItemBgSrc ? `url('https://bungie.net${currentItemBgSrc}')` : `url('${defaultBackground}')`;
        setBgSrc(bg);
    }, [currentItemBgSrc])

    
    return (
        <div className='appWrapper'>
            <Header loading={isLoading} user={user?.main} />
            <div className='appWrapperContent' style={{backgroundImage: bgSrc}}>
                {errorMessage && <Error message={`Error while login: ${errorMessage}`} />}
                {isLoading && <Loading />}
                {!isLoading && !user && <SignInOffer />}
                {!isLoading && user && <UserPage />}
            </div>
            <Footer />
        </div>
    )

}

export default App;