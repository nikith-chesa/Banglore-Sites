import React, { useState } from 'react';

const ListForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: '',
        persqft: '',
        area: '',
        propertyType: '',
        approval: '',
        facing: '',
        ownerShip: '',
        amenitiesNearby: '',
        roadinfront: '',
        waterandelectricity: '',
        distancefromL: '',
        emiloan: '',
    });

    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + images.length > 5) {
            alert('You can only upload up to 5 images.');
            return;
        }

        setImages((prev) => [...prev, ...files]);

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviews((prev) => [...prev, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, images }); // You'll send this to backend with FormData
        alert('Submitted! (Check console)');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-6"
        >
            <h2 className="text-2xl font-semibold">List a New Land</h2>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    'title',
                    'location',
                    'price',
                    'persqft',
                    'area',
                    'propertyType',
                    'approval',
                    'facing',
                    'ownerShip',
                    'amenitiesNearby',
                    'roadinfront',
                    'waterandelectricity',
                    'distancefromL',
                    'emiloan',
                ].map((field) => (
                    <input
                        key={field}
                        type={['price', 'persqft', 'area', 'roadinfront'].includes(field) ? 'number' : 'text'}
                        name={field}
                        placeholder={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                        required
                    />
                ))}
            </div>

            {/* Image Upload */}
            <div>
                <label className="block font-medium mb-2">Upload up to 5 images</label>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="block w-full border rounded px-3 py-2"
                />
                <div className="mt-4 flex flex-wrap gap-4">
                    {imagePreviews.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Preview ${idx + 1}`}
                            className="w-24 h-24 object-cover rounded shadow"
                        />
                    ))}
                </div>
            </div>

            <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
                Submit
            </button>
        </form>
    );
};

export default ListForm;
