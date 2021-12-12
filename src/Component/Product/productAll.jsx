import { useEffect, useState } from "react";
import "./product.css";
import ProductCart from "./cart/productCart";
import CustomModal from "./customModal";
import { useHistory } from "react-router";
import { scrollBottom } from "../InfinityScroll/infinityScroll";
import { productApi } from "../../API/Product/product";

const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState({ show: false, item: "" })
  const history = useHistory()
  const [check, setCheck] = useState(false)

  const path = window.localStorage.getItem("path")

  if (path && !modal.show && !check) {
    history.push(path);
  }

  useEffect(() => {
    const getAll = async () => {
      const data = await productApi.getAllData()
      setAllProduct((prev) => [...prev, ...data])
      setLoading(false)
    }
    getAll()
  }, [page]);

  // const handleScroll = (event) => {
  //   const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
  //   if (scrollHeight - scrollTop === clientHeight) {
  //     setPage(prev => prev + 1);
  //   }
  // };

  return (
    <div onScroll={(e) => scrollBottom(e) ? setPage(page + 1) : ""} className="allProduct">
      <div className="container">
        <div className="headerOne">All Products</div>
        <div className="row">
          <div className={modal.show ? "d-block" : "d-none"}>
            <CustomModal setModal={setModal} modal={modal} item={modal.item} setCheck={setCheck} />
          </div>
          {allProduct && allProduct.map((item) => (
            <div onClick={() => setModal({ show: true, item: item })} className="p-1 col-3">
              <ProductCart item={item} />
            </div>
          ))}

          {loading && <div>Loadingg</div>}

        </div>
      </div>
    </div>
  );
};

export default AllProduct;
