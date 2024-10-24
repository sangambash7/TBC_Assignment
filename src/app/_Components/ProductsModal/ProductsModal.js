import React from 'react';

export default function ProductsModal({
    isOpen,
    onClose,
    title,
    body,
    price,
    setTitle,
    setBody,
    setPrice,
    onSubmit,
    action,
}) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>{action === "create" ? "Create New Product" : "Edit Product"}</h2>
                <div className="post-content">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button onClick={onSubmit}>
                    {action === "create" ? "Add Product" : "Save Changes"}
                </button>
            </div>
        </div>
    );
}
