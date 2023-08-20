import { HeadProduct } from "../products/TotalProducts";

function HeadComp() {
  return (
    <>
      <section className="bg-mainBgBlue">
        <div className="container mx-auto px-10">
        <HeadProduct title={"Home"} child={"About"} />
        <div className="p-2">
            <h2 className="text-4xl text-mainText1">Company History </h2>
            <p className="w-1/2 font-medium leading-10 ">
              Proactively fabricate one-to-one materials via effective
              e-business. Completely synergize scalable e-commerce rather than
              high standards in e-services. Assertively iterate resource
              maximizing products after leading-edge intellectual capital.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeadComp;
