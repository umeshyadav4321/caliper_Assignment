import React from "react";
import { useEffect,useState } from "react";
import {useSearchParams} from "react-router-dom"

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  
  const[searchParams,setSearchParams]=useSearchParams();
  const initialSortParams=searchParams.get("sortby")
 
  const initialCategoryParams=searchParams.getAll("category")
  const [sortby, setSortby] = useState(initialSortParams||"");
  const [category, setCategory] = useState(initialCategoryParams||[]);
  const handleCategoryChange=(e)=>{
    const option=e.target.value;
    let newCategory=[...category];
    if(category.includes(option)){
      newCategory.splice(newCategory.indexOf(option),1)
    }else{
      newCategory.push(option)
    }
    setCategory(newCategory)

  }
  const handleSortBy=(e)=>{
    setSortby(e.target.value)

}
  useEffect(()=>{
    if(category){
      const params={

      }
      category && (params.category=category);
      sortby && (params.sortby=sortby);
      setSearchParams(params)
    }
  },[category,setSearchParams,sortby])
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" defaultChecked={category.includes("Analog")} onChange={handleCategoryChange} />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" defaultChecked={category.includes("Digital")} onChange={handleCategoryChange} />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" defaultChecked={category.includes("Chronograph")} onChange={handleCategoryChange} />
          <label>Chronograph</label>
        </div>
      </div>
      <div>
            <h2>Sort</h2>
            <div onChange={handleSortBy}>
            <div>
                <div><input type="radio" value="asc"  name="sortby"  defaultChecked={sortby==="asc"} />
                <label>Ascending</label>
                </div>
            </div>
            <div>
                <div><input type="radio" 
                name='sortby'
                value="desc" 
                defaultChecked={sortby==="desc"}
                />
                <label>Descending</label>
                </div>
            </div>
            </div>
        
    </div>
    </div>
    
  );
};

export default Filter;
