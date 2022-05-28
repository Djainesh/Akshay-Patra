import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Order from Anywhere</h4>
                            <p>Anyone in need can order food from our application. We provide food at
                                affordable cost
                            </p>
                            <p><a href="https://www.akshayapatrausa.org/?gclid=EAIaIQobChMIkLvMisuv9AIVn_3jBx2hbQqHEAAYASAAEgJeAfD_BwE">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Nutritious Food</h4>
                            <p>The food we provide has been prepared by very well renowed 
                                nutritionist, who check for all the nutrition in the food prepared
                            </p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-content">
                        <div className="content">
                            <h4>Join Us</h4>
                            <p>You can also join us by providing funds or be part of our kitchens. If 
                                you would like to join us then click on learn more.
                            </p>
                            <p><a href="/products">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
