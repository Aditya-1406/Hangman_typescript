import React from 'react'

const HEAD = (
    <div style={{
        width: '50px',
        height:'50px',
        borderRadius : '100%',
        border:'5px solid white',
        position: 'absolute',
        top : '47px',
        right : '-25px'
    }}> </div>
)

const BODY = (
    <div style={{
        width: '5px',
        height:'100px',
        background:'white',
        position: 'absolute',
        top : '105px',
        right : '2px'
    }}></div>
)

const RIGHT_ARM = (
    <div style={{
        width: '100px',
        height:'5px',
        background:'white',
        position: 'absolute',
        top : '145px',
        right : '-95px',
        rotate :'-30deg',
        transformOrigin :'left bottom',
    }}></div>
)

const LEFT_ARM = (
    <div style={{
        width: '100px',
        height:'5px',
        background:'white',
        position: 'absolute',
        top : '145px',
        right : '7px',
        rotate :'30deg',
        transformOrigin :'right bottom',
    }}></div>
)

const RIGHT_LEG = (
    <div style={{
        width: '100px',
        height:'5px',
        background:'white',
        position: 'absolute',
        top : '199px',
        right : '-93px',
        rotate :'60deg',
        transformOrigin :'left bottom',
    }}></div>
)

const LEFT_LEG = (
    <div style={{
        width: '100px',
        height:'5px',
        background:'white',
        position: 'absolute',
        top : '199px',
        right : '2px',
        rotate :'-60deg',
        transformOrigin :'right bottom',
    }}></div>
)


const HangmanDrawing = () => {
  return (
    <div style={{position:'relative'}}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
        <div style={{height:'50px',width:'10px',background:'white',position:'absolute',top:'0',right:'0'}}></div>
        <div style={{height:'10px',width:'250px',background:'white',marginLeft:'120px',}}></div>
        <div style={{height:'400px',width:'10px',background:'white',marginLeft:'120px',}}></div>
        <div style={{height:'10px',width:'250px',background:'white'}}></div>
    </div>
  )
}

export default HangmanDrawing