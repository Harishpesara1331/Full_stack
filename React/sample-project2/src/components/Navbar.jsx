import React,{ useEffect, useState } from 'react'

const Navbar = ({param1}) => {
    const [numberstate,setNumberstate]=useState(0)
    const [stringstate,setStringstate]=useState("a")
    const [arraystate,setArraystate]=useState(["a",false,0])

    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)
    
    const [count ,setCountstate]=useState(0)
    useEffect(()=>{
        //alert('effect rendered')
        console.log("count is "+count)
    },[count])


    return (
    <>
        <button className='w-[6rem]  h-[4em] bg-blue-500 text-white ' onClick={() => {setCountstate(count+1)}}>
            count is {count}
        </button>
        {param1.appname}
        <br />
        {param1.age}
    </>
    )
}

export default Navbar