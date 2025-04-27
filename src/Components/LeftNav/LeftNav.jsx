import { useEffect, useState } from "react";
import NewsCategory from "../NewsCategory/NewsCategory";


const LeftNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h3 className='font-bold'>All News Category</h3>
            <p className="py-2 px-6 mt-6 bg-gray-200">National Newses {categories.length}</p>
            {
                categories.map((category,idx)=><NewsCategory key={idx} category={category}></NewsCategory>)
            }
        </div>
    );
};

export default LeftNav;