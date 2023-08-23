import { GoTrash } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../store";
function ListProduct() {
  const dispatch = useDispatch();
  const { MainCardSlice, name } = useSelector(
    ({ ProductSlice1, MainCardSlice: { productList, searchProduct } }) => {
      // const filterProduct = productList.filter(
      //   (prod) =>
      //     prod.name &&
      //     prod.name.toLowerCase().includes(searchProduct.toLowerCase())
      // );
      return {
        MainCardSlice: productList,
        name: ProductSlice1.name,
      };
    }
  );
  const handleDelete = (prod) => {
    dispatch(removeProduct( prod))
  };
  console.log(MainCardSlice);
  const renderProducts = MainCardSlice.map((product) => {
    const bold =
      name && product.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div
        key={product.id}
        className={`rounded-2xl bg-white relative p-2  my-6 ${bold && "font-bold"}`}>
        <div className="flex justify-between">
          <img src={product.img} className="w-14 rounded-2xl mr-3" alt="small imag" />
          <p>
            {product.name} <br /> {product.cost}$
          </p>
          <button
            className="absolute -top-4 -right-2  p-1  rounded-full bg-red-500 text-white"
            onClick={() => handleDelete(product.id)}
          >
            <GoTrash  />
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Product List </h2>
        {renderProducts}
      </div>
    </>
  );
}

export default ListProduct;
