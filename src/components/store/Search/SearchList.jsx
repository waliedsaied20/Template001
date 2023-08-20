import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../store";
function SearchList() {
  const dispatch = useDispatch();

  // const { MainStoreProd, name } = useSelector(
  //   ({ productSlice, MainStoreProd: { searchWork, searchDone } }) => {
  //     const filterProduct = searchDone.filter((product) =>
  //       product.name.toLowerCase().includes(searchWork.toLowerCase())
  //     );
  //     return {
  //       MainStoreProd: filterProduct,
  //       name: productSlice,
  //     };
  //   }
  // );
  const { searchProduct, productList } = useSelector(
    (state) => state.MainCardSlice
  );

  const handleDelete = (product) => {
    dispatch(removeProduct(product.id));
  };
  const renderProduct = productList.map((product) => {
    const bold = product.name.toLowerCase().includes(searchProduct.toLowerCase());

    console.log(renderProduct);
    return (
      <>
        <div key={product.id} className={` ${bold} && 'bold'`}>
          <div className="flex">
            <div>{product.img}</div>
            <div>
              {product.name} <br />
              {product.cost}
            </div>
          </div>
          <button
            className="p-2 rounded-2xl bg-orange-500 text-white"
            onClick={() => handleDelete(product)}
          >
            Delete{" "}
          </button>
        </div>
      </>
    );
  });
  return (
    <>
      <section>{renderProduct}</section>
    </>
  );
}

export default SearchList;
