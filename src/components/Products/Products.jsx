import React,{useEffect} from 'react'
import { useDispatch, useSelector} from "react-redux";
import { getProducts } from '../../Redux/AppReducer/action';
import { useLocation, useSearchParams,Link } from "react-router-dom";
import ProdCard from "./ProdCard"
import Filter from "../Products/Filter"


const Products = () => {
  const dispatch=useDispatch();
  const[searchParams]=useSearchParams();
  const location=useLocation();
  const products=useSelector(store=>store.AppReducer.products)
  const sortby=searchParams.get("sortby")
  console.log(products)
  useEffect(()=>{
    if(location||products.length===0){
      const queryParams={
        params:{
          category:searchParams.getAll("category"),_sort:sortby && "price",
          _order:sortby
        }
      }
      dispatch(getProducts(queryParams))
    }
  },[location.search])
  return (
    <>
  
    <div>
    <h1>Products</h1>

    </div>
    <div style={{display:"flex",gap:"20px"}}>
    <div style={{width:"15%",border:"1px solid grey"}}>
    <Filter />
    </div>
    
   
  
    <div style={{display:"grid",width:"85%",gridTemplateColumns:"repeat(3,1fr)",gap:"30px",padding:"10px",textAlign:"center"}}>
      {/* Map through the watch list here using WatchCard Component */}
      {products.length>0 && products.map((item)=>(
        <div key={item.id}>
          <Link to={`/watches/${item.id}`}>
          <ProdCard key={item.id} item={item}/>
          </Link>

        </div>
      
      ))}
    </div>
  </div>
  </>
  )
}

export default Products