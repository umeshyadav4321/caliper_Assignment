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
          <input type="checkbox" value="Proteinrich" defaultChecked={category.includes("Proteinrich")} onChange={handleCategoryChange} />
          <label>Proteinrich</label>
        </div>
        <div>
          <input type="checkbox" value="Vegetables" defaultChecked={category.includes("Vegetables")} onChange={handleCategoryChange} />
          <label>Vegetables</label>
        </div>
        <div>
          <input type="checkbox" value="NaturalGrown" defaultChecked={category.includes("Naturalgrown")} onChange={handleCategoryChange} />
          <label>Naturalgrown</label>
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
