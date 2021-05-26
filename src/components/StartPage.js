import React from 'react';
import '../styles/StartPageView.css';

const StartPage = () => {
    return (
        <>
            <div className="start">
                <h1>Witaj na stronie z najlepszymi memami w sieci!</h1>
                <h2>Aby przeglądać memy kliknij przycisk <span>regular</span></h2>
                <h2>Jeżeli chcesz zobaczyć najlepiej ocenieniane memy kliknij w przycisk <span>hot</span></h2>
            </div>
        </>
    );
}

export default StartPage;