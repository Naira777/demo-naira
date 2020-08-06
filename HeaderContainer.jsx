import React from "react";
import HeaderFirst from "./Header";
import { connect } from "react-redux";
import { logout } from "../../Redux/auth-reducer";
import HeaderSecond from "./Headernew";
import s from "./Header.module.css";

class HeaderContainer extends React.PureComponent {
  
  render() {
    return (
      <>
        <HeaderFirst {...this.props} />

        <div className={s.headernew}>
        <HeaderSecond {...this.props} />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(
  HeaderContainer
);
