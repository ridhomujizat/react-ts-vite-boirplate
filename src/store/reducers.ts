import uiReducer from "store/slice/Ui";
import authReducer from "store/slice/Auth";

const reducers = {
  ui: uiReducer,
  auth: authReducer,
};

export default reducers;
