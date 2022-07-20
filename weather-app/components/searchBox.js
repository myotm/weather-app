import React from 'react'

export default function searchBox() {
    const [city, setCity] = React.useState("");

    const onChange = (e) => {
        const {value}  = e.target;
        setCity(value);
    }

    return (
        <div className="search">
            <input type="text" value={city} onChange={onChange} />
        </div>
    )
}
