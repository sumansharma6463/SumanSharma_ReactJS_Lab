import { useState } from "react";
import { postDataToServer } from "../service/service";

function AddExpense(props) {
    const [payeeName, setPayeeName] = useState("");
    const [price, setPrice] = useState(0);
	const [product, setProduct] = useState("");
	const [setDate, setSetDate] = useState("05-04-2022");

	
    const handlePayeeChange = (e) => {
		setPayeeName(e.target.value);
	};
	const handlePriceChange = (e) => {
		setPrice(parseInt(e.target.value));
	};
	const handleProductChange = (e) => {
		setProduct(e.target.value);
	};
	const handleDateChange = (e) => {
		setSetDate(e.target.value);
	};


const handleSubmit = async (event) => {
    event.preventDefault();
    const response = {
        payeeName,
        product,
        price,
        setDate,
    };
    const data = await postDataToServer(response);
    await postDataToServer(response);
    props.onTrue();
};
return (
    <section>
        <form onSubmit={handleSubmit}>
            <header id="pop-up">
                <h2>.. Add New Item ..</h2>
                <p>
                    <span className="red">
                        Read the below instruction before proceeding
                    </span>{" "}
                    <br></br>
                    Make sure you fill all the fields where{" "}
                    <span className="red">*</span> is provided
                </p>
            </header>

            <article>
                <p>
                    Name: <span className="red">*</span>{" "}
                </p>
                <select
                    required
                    value={payeeName}
                    onChange={handlePayeeChange}
                >
                    <option value="" defaultChecked>
                        Choose
                    </option>
                    <option value="Rahul">Rahul</option>
                    <option value="Ramesh">Ramesh </option>
                </select>
            </article>

            <article>
                <p>
                    Product Purchased: <span className="red">*</span>{" "}
                </p>
                <input
                    type="text"
                    required
                    value={product}
                    onChange={handleProductChange}
                ></input>
            </article>

            <article>
                <p>
                    Price: <span className="red">*</span>{" "}
                </p>
                <input
                    type="number"
                    required
                    value={price}
                    onChange={handlePriceChange}
                ></input>
            </article>

            <article>
                <p>
                    Date: <span className="red">*</span>{" "}
                </p>
                <input
                    type="date"
                    required
                    value={setDate}
                    onChange={handleDateChange}
                ></input>
            </article>

            <button onClick={props.onClose}>Close</button>
            <button type="submit">Submit</button>
        </form>
    </section>
);
}

export default AddExpense;