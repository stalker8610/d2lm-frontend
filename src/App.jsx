import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import CharacterPage from './Components/CharacterPage/CharacterPage';
import _Navbar from './Components/Navbar/Navbar'
import Loading from './Components/Loading/Loading'
import SignInOffer from './Components/SignInOffer/SignInOffer';
import Footer from './Components/Footer/Footer'

function App() {

    let stateSample = {
        main: {
            bungieMembershipId: '20909061',
            name: 'Partizan',
            imgPath: '/img/profile/avatars/d221_1.jpg'
        },
        storeMembership: {
            storeMembershipType: 3,
            storeMembershipId: '4611686018487196498'
        },
        characters: [
            {
                id: '2305843009434704222',
                classType: 1,
                ligth: 1573,
                emblemPath: '/common/destiny2_content/icons/7ca933ecdf6f9f08c3b6711190cce7a8.jpg',
            },
            {
                id: '2305843009494054401',
                classType: 2,
                ligth: 1354,
                emblemPath: '/common/destiny2_content/icons/24e9133c9cc157853762de5a2c3853aa.jpg',
            },
            {
                id: '2305843009604484901',
                classType: 0,
                ligth: 1354,
                emblemPath: '/common/destiny2_content/icons/93844c8b76ea80683a880479e3506980.jpg',
            }

        ]
    }

    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    useEffect(() => {

        document.title = user ? `${user.main.name}'s Destiny 2 Loot Manager` : 'Destiny 2 Loot Manager';

    }, [user]);

    useEffect(() => {

        const getUserData =

            (process.env.NODE_ENV === 'development' ?

                async () => {

                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setUser(stateSample);
                            resolve()
                        }, 500);
                    })
                }

                :

                async () => {
                    let userData = await fetch('https://d2lm.ru/api/profile/').then(response => response.json());

                    console.log('userData =', userData);

                    if (userData === JSON.stringify(null)) userData = null;

                    setUser(userData);
                })

        getUserData().then(() => setLoading(false));

    }, []); //on mount only




    return (
        <div className='appWrapper'>

            {/* {loading ? <Loading/> :
                <BrowserRouter>
                    <_Navbar user={user ? user.main : null} />

                    <div className='appWrapperContent'>
                        <Routes>
                            <Route path='/' element={(user) ? <CharacterPage characters={user.characters} /> : <div>PLEASE LOGIN TO PROCEED</div>} />
                        </Routes>
                    </div>
                </BrowserRouter>
            } */}
            <BrowserRouter>
                <_Navbar loading={isLoading} user={user?.main} />

                <div className='appWrapperContent'>
                    {isLoading && <Loading />}
                    {!isLoading &&
                        <Routes>
                            <Route path='/' element={ (user) ? <CharacterPage characters={user.characters} /> : <SignInOffer />} />
                        </Routes>
                    }
                </div>

                <Footer />
            </BrowserRouter>

        </div>
    )

}

export default App;