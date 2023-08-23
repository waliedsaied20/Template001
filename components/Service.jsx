import MainProducts from "./products/TotalProducts";
import { HeadProduct } from "./products/TotalProducts";
function Service() {
  return (
    <div >
      <HeadProduct  title={"Home"} child={'Products'}/>
      <MainProducts />
    </div>
  );
}

export default Service;
