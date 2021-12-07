import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { getAdminSession, getAllMottoPackage } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles.scss";
import { api } from "service/api";
import { TrainerApi } from "service/apiVariables";
import AsyncSelect from 'react-select/async';
import { debounceFunction } from "helpers/debounce";
import { MottoPassCard } from "component/common/MottoPassCard";

function AdminMottoPassesFC(props) {
  const [passData, setPassData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [type, setType] = React.useState("active");
  const [pageLimit, setPageLimit] = React.useState();
  const [trainerSearch,setTrainerSearch] = useState();
  const [trainerSelectedValue,setTrainerSelectedValue] = useState();
  const [userSearch,setUserSearch] = useState();
  const [userSelectedValue,setUserSelectedValue] = useState();  


  React.useEffect(() => {

      props.getAllMottoPackage(type, page).then(({data , totalCount}) => {
      console.log(data, "session");
      setPassData(data);
      setPageLimit(totalCount/10)
    });         
  }, [page]);

  React.useEffect(() => {
      if(page !== 1) {
          setPage(1);
        return;
      };

      props.getAllMottoPackage(type, 1).then(({data,totalCount}) => {
      console.log(data, "session");
      setPassData(data);
      setPageLimit(totalCount/10)
    });   

  }, [type]);

//   React.useEffect(() => {
//     props.getAllMottoPackage(type, page).then(({data}) => {
//       console.log(data, "session");
//       setPassData(data);
//     });
//   }, []);

  

  return (
    <div className="admin_booking">
      <div className="filters">
        <div className="type">
          <div
            className={`${type === "active" ? "active" : ""} upcoming`}
            onClick={() => {
              setType("active");
            }}
          >
            Active
          </div>
          <div
            className={`${type === "expired" ? "active" : ""} upcoming`}
            onClick={() => {
              setType("expired");
            }}
          >
            Expired
          </div>      
        </div>
      </div>
      <div className="row no-gutters w-100 justify-content-around">
        {passData.map((data) => (
            <MottoPassCard data={data} key={data.id} className="col-xl-6 col-12" />
        ))}

      </div>
      <div style={{margin:"1rem", display:"flex", justifyContent:"flex-end", alignItems:"center"}}>
      <b
       style={{cursor:"pointer"}}
        onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
          }
        }}
      >
        { (page === 1)? null : page-1}
      </b>
     <b style={{margin:"1rem", backgroundColor:"#53BFD2", padding:"1rem", color:"white"}}>{page}</b> 
      <b
        style={{cursor:"pointer"}}
        onClick={() => {
          setPage(page + 1);
        }}
      >
         {(pageLimit === page)? null : page+1}
      </b>
      </div>
      
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAdminSession,      
      getAllMottoPackage
    },
    dispatch
  );
};

const AdminMottoPasses = connect(null, mapDispatchToProps)(AdminMottoPassesFC);
export default AdminMottoPasses;
