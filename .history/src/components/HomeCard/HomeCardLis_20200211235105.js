import React,{useState, Fragment} from "react";
import HomeCard from "./HomeCard"

const HomeCardList = ()=>{
    const [card] = useState([{
        img:'',
        title:' Casas',
        description:'',
    },{
        img:'',
        title:'Escritório',
        description:'',
    },{
        img:'',
        title:'Decoração',
        description:'',
    },{
        img:'',
        title:'Condomínio',
        description:'',
    },{
        img:'',
        title:'Resort',
        description:'',
    },{
        img:'',
        title:'Projetos Comerciais',
        description:'',
    }])

    return(
        <Fragment>
            <HomeCard img=/>
        </Fragment>
    )
}