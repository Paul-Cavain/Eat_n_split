import { useState } from "react";
import Button from "./Button";

const SplitBillForm = ({ selectedFriend, onSplitBill }) => {
    const [bill, setBill] = useState("");
    const [payByUser, setPayByUser] = useState("");
    const payByFriend = bill ? bill - payByUser : "";
    const [whoIsPay, setWhoIsPay] = useState("user")

    function handleSubmit(e) {
        e.preventDefault();

        if(!bill || !payByUser) return;
        onSplitBill(whoIsPay === 'user' ? payByFriend : -payByUser)
    }

    return(
        <div className="bg-orange-200 p-4 w-3/4 mt-12">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl uppercase">split the bill with {selectedFriend.name}</h1>
                <img src={selectedFriend.image} alt={selectedFriend.id} className="size-10 rounded-full" />
            </div>
            <form className="flex flex-col gap-y-5 pt-10" onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between items-center">
                    <label htmlFor="friend_name">💸 Bill Value</label>
                    <input 
                        type="number"
                        name="bill"
                        required
                        className="w-fit px-2 py-3 rounded-md focus:outline-none text-center"
                        value={bill}
                        onChange={(e) => setBill(Number(e.target.value))}
                    />
                </div>
                <div className="flex flex-row justify-between items-center">
                    <label htmlFor="friend_image">🧕 Your Expenses</label>
                    <input 
                        type="number"
                        name="expenses"
                        required
                        className="w-fit px-2 py-3 rounded-md focus:outline-none text-center"
                        value={payByUser}
                        onChange={(e) => setPayByUser(Number(e.target.value) > bill ? payByUser : (Number(e.target.value)))}
                    />
                </div>
                <div className="flex flex-row justify-between items-center">
                    <label htmlFor="friend_image">👯‍♀️ {selectedFriend.name}'s Expenses</label>
                    <input 
                        type="text"
                        name="friend_expenses"
                        disabled
                        className="w-fit px-2 py-3 rounded-md focus:outline-none text-center"
                        value={payByFriend}
                    />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <label htmlFor="friend_image">🙇‍♂️ Who is paying the bill</label>
                    <select className="w-fit px-16 py-3 rounded-md focus:outline-none" value={whoIsPay} onChange={(e) => setWhoIsPay(e.target.value)}>
                        <option value="user">You</option>
                        <option value="friend">{selectedFriend.name}</option>
                    </select>
                </div>
                <div className="flex justify-end w-full">
                    <Button>Split Bill</Button>
                </div>
            </form>
        </div>
    )
}
export default SplitBillForm;