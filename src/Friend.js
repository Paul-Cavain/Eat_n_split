import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
    const isSelected = selectedFriend?.id === friend.id;
    return(
        <div className={isSelected ? "flex flex-row justify-between items-center gap-x-4 bg-orange-200 w-3/4" : "flex flex-row justify-between items-center gap-x-4 hover:bg-orange-200 w-3/4" }>
            <div className="flex flex-row justify-start items-center gap-x-4">
                <div className="flex flex-col justify-center items-start py-3 px-6">
                    <img src={friend.image}  alt={friend.name} className="size-14 rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <p className="text-xl font-medium">{friend.name}</p>
                    {friend.balance === 0 && (
                        <p>
                            You and {friend.name} are even
                        </p>
                    )}
                    {friend.balance > 0 && (
                        <p className="text-green-500">
                            {friend.name} owes you ${Math.abs(friend.balance)}
                        </p>
                    )}
                    {friend.balance < 0 && (
                        <p className="text-red-500">
                            You owe {friend.name} ${Math.abs(friend.balance)}
                        </p>
                    )}

                </div>
            </div>
            <div className="flex justify-end items-center px-3">
                <Button onClick = {() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
            </div>
        </div>
    )
}
export default Friend;