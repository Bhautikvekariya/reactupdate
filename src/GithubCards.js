import react from 'react';
import { useState, useEffect } from 'react';

function GithubCards(){
     const [user,setUser]=useState(null);
     const [loading,setLoading]=useState(true);
     const [error,setError]=useState(null);

     useEffect(()=>{
        fetch('https://api.github.com/users/octocat')
        .then(response=> response.json())
        .then((data)=>{
            setUser(data);
            setLoading(false);
        })
        .catch(err=>{
            setError(err);
            setLoading(false);
        });
        return()=>{
            setUser(null);
        };
        
     },[]);
     if(loading) return <p>Loading....</p>
     if(error) return <p>Error loading data: {error.message}</p>;
     return (
        <div>
            <h1>User Name: {user.name}</h1>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
            <p>Location: {user.location}</p>
            <p>Company: {user.company}</p>
        </div>
     );
    }

export default GithubCards;
    {/* <img src={user.avatar_url} alt={user.name} style={{width: '100px', height: '100px'}}/> */}