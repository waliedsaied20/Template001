

function SearchInput () {
      
    return(
        <>
            <div>
                <div className="flex flex-col my-2">
                    <label htmlFor="search" className="text-md text-2xl font-slab font-bold my-3">SearchProduct:</label>
                    <input className="p-2 rounded-xl" type="text" placeholder="Search Product" id="search"  />
                </div>
            </div>
        </>
    )
}
export default SearchInput;




