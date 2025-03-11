import Friend from "./Friend";

const FriendList = ({ friends, onSelection, selectedFriend }) => {
    return(
        <div className="p-10 w-full">
            {friends.map((friend) => (
                <Friend friend={friend} onSelection = {onSelection} selectedFriend = {selectedFriend} key={friend.id}/>
            ))}
        </div>
    )
}
export default FriendList;