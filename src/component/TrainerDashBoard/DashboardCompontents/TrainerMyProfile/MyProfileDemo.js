import React, { useState, useEffect } from "react";
import { getTrainerDetails, updateTrainerDetails } from "action/trainerAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TrainerApi } from "service/apiVariables";
import { api } from "service/api";
import { Toast } from "service/toast";

const MyProfileDemoFC = ({
  getTrainerDetails,
  details,
  updateTrainerDetails,
}) => {
  const [trainerData, setTrainerData] = useState({
    motto: "",
  });

  //Updating Modified data
  const handleSubmit = () => {
    const { motto } = trainerData;
    let payload = {
      myMotto: motto,
    };
    const { updateTrainerAvailabilityApi } = TrainerApi;
    updateTrainerAvailabilityApi.body = payload;
    api({ ...updateTrainerAvailabilityApi })
      .then(({ data, message }) => {
        Toast({ type: "success", message: message || "Success" });
        console.log(data, message);
      })
      .catch((err) => console.log(err));
  };

  //Displaying api data
  useEffect(() => {
    getTrainerDetails()
      .then((data) => {
        console.log(data, "api data demo");

        const { myMotto = "" } = data || {};

        const storeData = {
          details: {
            motto: myMotto,
            ...details,
          },
        };
        setTrainerData(storeData.details);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <input
        type="text"
        value={trainerData.motto}
        onChange={(e) => {
          setTrainerData({
            ...trainerData,
            motto: e.target.value,
          });
        }}
        name="motto"
      />
      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  details: state.trainerReducer.details,
  trainerPersonalData: state.trainerReducer.data,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTrainerDetails,
      getTrainerDetails,
    },
    dispatch
  );
};
const MyProfileDemo = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfileDemoFC);
export default MyProfileDemo;
