// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import "./About.css";

// const About = () => {
//     const [info, setInfo] = useState({})
//     useEffect(()=> {
//         axios.get('https://virhuez-portfolio-production.up.railway.app/about')
//         .then (res => setInfo(res.data[0]))
//     },[setInfo])
//     return (
//         <>
//         <h1>Hello Me!</h1>
//         <h2>{info.name}</h2>
//         <h2>{info.about_me}</h2>
//         </>
//     )
// }

// export default About;