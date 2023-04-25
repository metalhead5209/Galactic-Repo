'use client'

import { useState } from 'react';

const charAPI = 'http://localhost:3000/api/charSearch';
const planetAPI = 'http://localhost:3000/api/planetSearch';

export default function CharSearch() {
    const [name, setName] = useState('');
    const [facts, setFacts] = useState([]);
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name) {
            return
        } else{}
        try {
            const response = await fetch(charAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name })
            });
            const data = await response.json();;
            console.log(data.results[0])
            setFacts(prevFacts => [...prevFacts, ...data.results])
            setName('');
        } catch (error) {
            console.error('Error fetching data:', error);
        } 
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        className="block px-4 py-2 leading-5 text-gray-700 placeholder-gray-400 border border-slate-950 rounded-md shadow-sm focus:outline-none"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            </div>
           
            <div>
                <h2>Results:</h2>
               
                {facts.map((fact, index) => (
                    <li key={index}>
                        <ul>
                            {Object.entries(fact).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key}: </strong>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}

            </div>
        </div>
    );
}
