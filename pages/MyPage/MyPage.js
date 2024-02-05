import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress, updateNickname } from "../../store/reducers/user.reducer";

const MyPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newNickname, setNewNickname] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const nickname = useSelector(state => state.user.nickname);
  const address = useSelector(state => state.user.address);

  const handleNicknameChange = () => {
    dispatch(updateNickname({ data: newNickname }));
    alert(`${newNickname}로 닉네임이 변경되었습니다.`);
  };

  const handleAddressChange = () => {
    dispatch(updateAddress({ data: newAddress }));
    alert(`${newAddress}로 주소가 변경되었습니다.`);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>My Page</h1>
          <MyComponent nickname={nickname} address={address} />
          <div>
            <input
              type="text"
              placeholder="새 닉네임 입력"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
            />
            <button onClick={handleNicknameChange}>닉네임 변경</button>
          </div>
          <div>
            <input
              type="text"
              placeholder="새 주소 입력"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <button onClick={handleAddressChange}>주소 변경</button>
          </div>
        </div>
      ) : (
        navigate("/sign-in")
      )}
    </div>
  );
};

const MyComponent = ({ nickname, address }) => {
  return (
    <div>
      <p>Nickname: {nickname}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default MyPage;