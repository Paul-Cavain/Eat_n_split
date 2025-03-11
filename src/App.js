import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import FriendList from "./FriendList";
import SplitBillForm from "./SplitBillForm";


function App() {
  
  const initialUsers = [
    {
      id: 46783,
      name: "Stanley",
      image: "./images/Clark.jpg",
      balance: -10
    },
    {
      id: 68754,
      name: "Meristella",
      image: "./images/Sofia.jpg",
      balance: 20
    },
    {
      id: 23658,
      name: "Promise",
      image: "./images/arjun.jpg",
      balance: 0
    },
  ];
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialUsers);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend)
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false)
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((currentFriend) => (currentFriend?.id === friend.id ? null : friend))
    setShowAddFriend(false)
  }

  function handleSplitBill(value) {
    console.log(value)
    setFriends((friends) => 
      friends.map((friend) => 
        friend.id === selectedFriend.id 
          ? { ...friend, balance: friend.balance + value} 
          : friend
      )
    );
    setSelectedFriend(null)
  }

  return (
    <div className="flex flex-row w-full">
      <div className="w-1/2">
        <FriendList friends={friends} onSelection = {handleSelectedFriend} selectedFriend = {selectedFriend} />

        {showAddFriend && (
        <AddFriendForm handleAddFriend = {handleAddFriend}/>
        )}
        
        <div className="flex justify-end items-center w-1/2 ml-40">
        <Button onClick = {handleShowAddFriend}>{!showAddFriend ? "Add Friend" : "Close"}</Button>
        </div>
      </div>
      
      <div className="w-1/2">
      {selectedFriend && (
        <SplitBillForm selectedFriend = {selectedFriend} onSplitBill = {handleSplitBill} />
      )}
      </div>
      
    </div>
  );
}

export default App;
