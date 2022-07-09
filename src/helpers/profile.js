import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import Dropdown from "rc-dropdown";
import { useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";


const ProfileHoc = () => {
 let navigate = useNavigate();
 function onSelect({ key }) {
    console.log(`${key} selected`);
  }

  function onVisibleChange(visible) {
    console.log(visible);
  }
   const menuCallback = () => (
    <Menu onSelect={onSelect}>
      <MenuItem
        key="1"
        onClick={() => {
          navigate("/myProfile");
        }}
      >
        My Profile
      </MenuItem>
      <MenuItem
        key="2"
        onClick={() => {
          navigate("/subscriptions");
        }}
      >
        Subscriptions
      </MenuItem>
    </Menu>
  );
    return (
      <Dropdown
        trigger={["click"]}
        overlay={menuCallback}
        animation="slide-up"
        onVisibleChange={onVisibleChange}
      >
        <IoMdPerson id="dropdown-basic" size={30} />
      </Dropdown>
    );
};

export default ProfileHoc;
