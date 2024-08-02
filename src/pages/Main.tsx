import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, Status } from "../lib/feature/products";
import { AppDispatch, RootState } from "../lib/store";

export const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.products.status);
  const data = useSelector((state: RootState) => state.products.data);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="main">
      {status === Status.LOADING && <p>...loading</p>}

      {status === Status.SUCCESS && (
        <div>
          {data.map((item) => (
            <div key={item.id}> {item.title} </div>
          ))}
        </div>
      )}
    </div>
  );
};
