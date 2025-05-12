import React from 'react';
import './App.css';
import planet from './assets/planet.png'; // <-- Add your low poly planet image here

const menuItems = [
    { label: 'Log Game', action: () => alert('Log Game') },
    { label: 'Journal', action: () => alert('Journal') },
    { label: 'AI Recs', action: () => alert('AI Recs') },
    { label: 'Settings', action: () => alert('Settings') }
];

function App() {
    return (
        <div className="app-container">
            <h1 className="dashboard-title">Xbox Journal Dashboard</h1>
            <div className="menu-grid">
                {menuItems.map((item, i) => (
                    <div className="planet-container" key={i}>
                        <img src={planet} className="planet" alt="Planet" />
                        <div className="orbit-band" onClick={item.action}>
                            <span>{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;