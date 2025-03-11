import { useState } from "react";
import Button from "./Button";

const AddFriendForm = ({ handleAddFriend }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("./images/");
    const [balance, setBalance] = useState(0)

    function handleSubmit(e) {
        e.preventDefault();

        if(!name || !image || !balance) return;
        const id = crypto.randomUUID()
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance
        }

        handleAddFriend(newFriend);

        setName("");
        setImage("./images/");
        setBalance()
    }

    return(
        <div className="bg-orange-200 p-4 mx-10 mb-4 w-8/12">
            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between items-center">
                    <label htmlFor="friend_name">Friend name</label>
                    <input 
                        type="text"
                        name="friend_name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-fit px-2 py-3 rounded-md focus:outline-none text-center"
                    />
                </div>
                <div className="flex flex-row justify-between items-center">
                    <label htmlFor="friend_image">Friend image</label>
                    <input 
                        type="text"
                        name="friend_image"
                        required
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-fit px-2 py-3 rounded-md focus:outline-none"
                    />
                </div>
                <div className="flex flex-row justify-between items-center">
                    <label htmlFor="balance">Balance</label>
                    <input 
                        type="number"
                        name="balance"
                        required
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                        className="w-fit px-2 py-3 rounded-md focus:outline-none text-center"
                    />
                </div>
                <div className="flex justify-end">
                    <Button>Add</Button>
                </div>
            </form>
        </div>
    )
}
export default AddFriendForm;