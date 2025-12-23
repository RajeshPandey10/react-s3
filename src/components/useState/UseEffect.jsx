import { useEffect, useState } from "react"


const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Rohit')
    const [search,setSearch] = useState('search ...')
    


    function handleSearch(){

    }
    function handleChange(e){
        console.log(e.target.value)
        setSearch(e.target.value)

    }
   function handleClick(){
    setCount(count+1)
   }
   function handleNameClick(){
    setName("Ram")
   }

   let num = count
    //type-1
    useEffect((()=>{
        console.log(`hello ${num}`)
    }))

    //type-2-imp

    useEffect(()=>{
        console.log(`this is type-2 ${num}`)
    },[])
     //type-3
 useEffect(()=>{
        console.log(`you searhed ${search}`)
    },[search])

  return (
    <>
     {/* <div className="text-center text-6xl mt-50">

        <h1>{count}</h1>
        <h1>{name}</h1>
        <button onClick={handleClick}>+</button>
        <button onClick={handleNameClick}>change name</button>
     </div> */}
     <div className="flex justify-end text-xl py-6 px-4 ">
        <input onChange={handleChange} value={search} type="text" className="text-black border px-4 rounded-full" />

        <button  onClick={handleSearch} className="border px-4 py-2 rounded-full cursor-pointer text-lg hover:bg-amber-100 transition-all">search</button>
     </div>
    
    </>
  )
}

export default UseEffect