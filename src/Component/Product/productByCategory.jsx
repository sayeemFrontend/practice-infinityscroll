import { useEffect, useState } from "react";
import ProductCart from "./cart/productCart";
import { useHistory, useParams } from "react-router";
import { scrollBottom } from "../InfinityScroll/infinityScroll";
import CustomModal from "./customModal";
import { categoryApi } from "../../API/Category/category";

const ProductByCategory = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)
  const categoryProduct = useParams();
  const [check, setCheck] = useState(false)
  const [modal, setModal] = useState({ show: false, item: "" })
  console.log("assasasasas", categoryProduct.id);
  //for on Reloading effect
  const history = useHistory()
  const path = window.localStorage.getItem("path")
  if (path && !modal.show && !check) {
    history.push(path);
  }

  useEffect(() => {
    setProducts([])
  }, [categoryProduct.id])

  useEffect(() => {
    const getData = async () => {
      const data = await categoryApi.getProductsUnderCategory(categoryProduct.id, page)
      setProducts((prev) => [...prev, ...data])
    };
    getData();
  }, [categoryProduct.id, page]);

  if (!products) {
    return "Loadding";
  }

  return (
    <div onScroll={(e) => scrollBottom(e) ? setPage(page + 1) : ""} className="allProduct">
      <div className="container">
        <div className="headerOne">{categoryProduct.name}</div>
        <div className="row">
          <div className={modal.show ? "d-block" : "d-none"}>
            <CustomModal setModal={setModal} modal={modal} item={modal.item} setCheck={setCheck} />
          </div>
          {products.map((item) => (
            <div onClick={() => setModal({ show: true, item: item })} className="p-1 col-3">
              <ProductCart item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductByCategory;
