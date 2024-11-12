// components/GoldPrice.tsx
import React from 'react';

const GoldPrice: React.FC = () => {
    return (
        <section className="gold-price container p-4 my-5" style={{
            backgroundColor: '#f7f7f7',
            borderRadius:"2vmax"
        }}>
            <div className="row align-items-center">
                {/* Left Side - Price and Info */}
                <div className="col-md-6">
                    <h2 className="fw-bold">Get Instant Prices On Your Gold</h2>
                    <div className="d-flex flex-column mt-4">
                        <h5 className="text-muted">BUYING PRICE</h5>
                        <div className="d-flex align-items-center mt-2">
                            <div>
                                <p className="fw-bold mb-0" style={{ fontSize: '1.2rem' }}>24K 999.0</p>
                            </div>
                            <div className="ms-4">
                                <p className="fw-bold mb-0" style={{ fontSize: '1.5rem' }}>5331.8/gm</p>
                                <small className="text-danger">
                                    <i className="bi bi-caret-down-fill"></i> 0.30% since yesterday
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Input Fields and Button */}
                <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
                    <small className="text-danger fw-bold mb-3">
                        <i className="bi bi-circle-fill text-danger"></i> LIVE RATE
                    </small>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Amount" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Grams" />
                    </div>
                    <button className="btn btn-primary px-4 py-2">Buy Now</button>
                </div>
            </div>
        </section>
    );
};

export default GoldPrice;
