import products from "../data/list.json";
import Cards from "../Components/Cards";

function Store() {
  return (
    <>
      <div className="flex flex-col items-center pb-9 bg-about-hero bg-contain">
        <h1 className="text-5xl font-bold text-violet-500 p-6">PRODUCTS</h1>
        <div className="grid gap-6 md:grid-cols-2 md:grid-flow-row lg:grid-cols-3">
          {products.map((card, index) => {
            return (
              <>
                <div key={index}>
                  <Cards {...card} />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Store;
