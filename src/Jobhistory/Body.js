import React, { useState } from "react";
import "./Body.css";
import CarDetails from "../CarDetails.json";
import Completed from "./Completed";
import Declined from "./Declined";
import Expired from "./Expired";
import Pagination from "../Pag/Pagination";


const Body = () => {
  const [data, setData] = useState(CarDetails);
  const [all, setAll] = useState(true);
  const [comp, setComp] = useState(false);
  const [decl, setDecl] = useState(false);
  const [expr, setExpr] = useState(false);

  const [perPage, setPerPage] = useState(8);
  const [fromPage, setFromPage] = useState({
    statingItem: 0,
    endingItem: perPage,
  });

  const onChange = (startItem, endingItem) => {
    setFromPage({
      statingItem: startItem,
      endingItem: endingItem,
    });
  };

  const handleAll = () => {
    setAll(true);
    setComp(false);
    setDecl(false);
    setExpr(false);
  };
  const handleCompleted = () => {
    setComp(true);
    setDecl(false);
    setAll(false);
    setExpr(false);
  };

  const handleDeclined = () => {
    setDecl(true);
    setAll(false);
    setComp(false);
    setExpr(false);
  };
  const handleExpired = () => {
    setExpr(true);
    setDecl(false);
    setAll(false);
    setComp(false);
  };

  return (
    <div className="body_maindiv">
      <div className="bodre">
        <div className="header_names">
          <button className="completed" onClick={handleAll}>
            ALL
          </button>
          <button className="completed" onClick={handleCompleted}>
            COMPLETED
          </button>
          <button className="completed" onClick={handleDeclined}>
            DECLINED
          </button>
          <button className="completed" onClick={handleExpired}>
            EXPIRED
          </button>
        </div>
        <section className="bottomborder"></section>

        <div className="body">
          <span>Request Date</span>
          <span>STATUS</span>
          <span>QUOTE</span>
          <span>MODEL / DETAILS</span>
          <span className="area">AREA</span>
        </div>

        {all &&
          data?.jobhistory
            ?.slice(fromPage.statingItem, fromPage.endingItem)
            .map((item) => (
              <div
                className={
                  (item.type === "Service" && "type_service") ||
                  (item.type === "Wash" && "type_wash") ||
                  (item.type === "Repair" && "type_Repair")
                }
              >
                <div className="map_div">
                  <span className="request">{item.requestdate}</span>
                  <span
                    className={
                      item.status === "Expired"
                        ? "status_expired"
                        : item.status === "Declined"
                        ? "status_declined"
                        : item.status === "Completed"
                        ? "status_completed"
                        : ""
                    }
                  >
                    {item.status}
                  </span>
                  <span className="quote">{item.quote}</span>
                  <span className="model_div"> {item.model}</span>
                  <span className="details_div">{item.details}</span>
                  <span className="area_div">{item.area}</span>
                </div>
              </div>
              
            ))}
        <Completed comp={comp} />
        <Declined decl={decl} />
        <Expired expr={expr} />
       
      </div>
      <Pagination
          onChange={onChange}
          perPage={perPage}
          total={data?.jobhistory?.length}
        />
    </div>
  );
};
export default Body;
