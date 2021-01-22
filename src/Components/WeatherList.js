import React from 'react'

export default function ListShow(props){
    let ShowText=props.show.Arr.map((item)=>
        <div id={item.id}>
        <hr/>
        <p>城市：{item.name}</p>
        <p>目前的溫度：{(item.main.temp - 273.15).toFixed(1) + '\xB0C'}</p>
        <p>氣候狀況：{item.weather[0].description}</p>
        <p>Icon圖示：<img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}/></p>
        </div>
    )
    if(props.show.Msg!==""){
        ShowText.splice(0,0,props.show.Msg);
    }
    return ShowText;
}