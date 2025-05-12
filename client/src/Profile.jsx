import React, { useEffect, useState } from 'react';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/auth/user', { credentials: 'include' })
            .then(res => res.json())
            .then(data => setUser(data.user));
    }, []);

    if (!user) return <p>Loading Steam profile...</p>;

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome, {user.displayName}</h1>
            <img src={user.photos[2]?.value || user.photos[0].value} alt="avatar" />
            <p>Steam ID: {user.id}</p>
        </div>
    );
}

export default Profile;