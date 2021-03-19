import './App.css';
import {ReactComponent as Loading} from './logo.svg';
import React, {useEffect, useState} from "react";
import img from '../src/background.jpg';

function App() {

    const [time, setTime] = useState(0)

    const [isActive, setActive] = useState(false)

    useEffect(() => {

        setTimeout(() => {

            if ( isActive && time <= 5) {

                setTime(time + 1)
                loadingStyle()

                if (document.querySelector(`.st${time}`)) {
                        document
                        .querySelector(`.st${time}`)
                        .style
                        .fill = 'white'
                }
            }
        }, 100)

    }, [isActive,time])

    function loadingStyle() {

        if (time === 5) {

            setTime(0);

        } else {

            if (document.querySelector(`.st${time}`)) {

                document
                    .querySelector(`.st0`)
                    .style
                    .fill = '#A1CE5A'
                document
                    .querySelector(`.st1`)
                    .style
                    .fill = '#C4D82E'
                document
                    .querySelector(`.st2`)
                    .style
                    .fill = '#2CB34A'
                document
                    .querySelector(`.st3`)
                    .style
                    .fill = '#015DAB'
                document
                    .querySelector(`.st4`)
                    .style
                    .fill = '#288DCC'
                document
                    .querySelector(`.st5`)
                    .style
                    .fill = '#70ACDE'
            }
        }

        

        return isActive
            ? (

                <> 
                    {/* <header className = "App-header" >  */}
                    <div className="image">
                        <div className="container">
                            <Loading/>
                            <div className="spacing"></div>
                            <button onClick={closeLoading}>Disable Loading</button>
                        </div>
                    </div>
                    {/* </header> */}
                </>

            )
            : (
                <div className="image">
                    <button onClick={openLoading}>Active Loading</button>
                </div>
            )
        }

        function openLoading() {
            setActive(true)
        }

        function closeLoading() {
            setActive(false)
        }


        return (
        
        <> 
        
        {
            loadingStyle()
        } 
        
        </>
        
        );
    }

export default App;
