 
import React from 'react'
import Particles from 'react-tsparticles';

export default function ParticleBackground () {
    return(<div>
        <Particles options ={{
            background : {
                color : "#0a192a",
            },
            fpsLimit: 60,
            interactivity : {
                detectsOn : "canvas",
                events:{
                    resize : true,
                   
                },
            },
            particles : {
                color:{
                    value:"9fafca"
                },
                number: {
                    density: {
                        enable : true,
                        area: 1080
                    },
                    limit: 0,
                    value: 400,
                },
                opacity:{
                    animation:{
                        enable:true,
                        minimumValue: 0.1,
                        speed:2,
                        sync: false
                    },
                    random: {
                        enable:true,
                        minimumValue: 0.05,
                    },
                    value: 1
                },
                shape:{
                    type: "circle",
                    
                     

                },
                size:{
                    random:{
                        enable : true,
                        minimumValue: 2.5,
                    },
                    value:1,
                },
            },
        }}/>
         
    </div>);
}