import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste,details,category, photo } = coffee;
    console.log(coffee);
    
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        //console.log(updatedCoffee);

        //send data to the server
        fetch(`http://localhost:5002/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-4xl font-extrabold mb-8">Update Coffee: {name}</h2>
            <p className="mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iste iusto eveniet animi deserunt! Quam debitis beatae quasi sed dolorum!</p>
            <form onSubmit={handleUpdateCoffee}>
                {/* form(name ,quantity) row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="quantity"
                            defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form (supplier, taste)row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="supplier"
                            defaultValue={supplier}  placeholder="Supplier name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="taste"
                            defaultValue={taste}  placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form(category ,details) row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="category"
                            defaultValue={category}  placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="details"
                            defaultValue={details}  placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo URL row */}
                <div className="mb-6">
                    <div className="form-control md:full ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="photo" defaultValue={photo}  placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" className="btn btn-block" value="Update Coffee" />

            </form>
        </div>
    );
};

export default UpdateCoffee;