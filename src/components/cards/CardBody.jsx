import React from 'react';
import card from '../../images/cards/card.png';
import './CardBody.css';

const CardBody = () => {
    return (
        <div className='cardMainContainer content'>
            <div className='cardMainContainer_scnd'>
                <div className='cardView'>
                    <img id='stickyImg' src={card} alt='' />
                </div>
                <div className='saling'>
                    <a href="signin">Purchase Records</a>
                    <h1>TickTick One-Year Premium Gift Card</h1>
                    <form action="" method="post">
                        <h5>Card Types</h5>
                        <div className='buttons'>
                            <button className='activeButton'>Standard</button>
                            <button>Holiday</button>
                            <button>Birthday</button>
                            <button>New Year</button>
                            <button>Christmas</button>
                        </div>
                        <h5>Quntity</h5>
                        <input type="number" name="quantity" id="quantity" min='1' step='1' value='1' />
                        <h5>Select Recipient</h5>
                        <label className='lblBuy' htmlFor="">
                            <input type="radio" name="recipient1" id="recipient1"
                                onSelect={() => {
                                    let a = document.getElementsByClassName('name').visible;
                                    a.visible = false;
                                    console.log(a);
                                }}
                            />
                            Send the card(s) to me/Group Buying
                        </label>
                        <label className='lblBuy' htmlFor="">
                            <input type="radio" checked='checked' name="recipient1" id="recipient1" />
                            Send the card(s) to the recipient
                        </label>
                        <hr />
                        <div className='recipientInfo'>
                            <label className='name' htmlFor="">Recipient Name</label>
                            <input className='name' type="text" name="" id="name" placeholder='Name' />
                            <label className='email' htmlFor="">Recipient Email</label>
                            <input type="email" name="" className='email' id="email" placeholder='Email Address' />
                            <label className='name' htmlFor="">Your Name</label>
                            <input className='name' type="text" name="" id="name" placeholder='Name' />
                            <label className='message' htmlFor="">Your Message</label>
                            <textarea className='message' name="" id="" cols="30" rows="10"></textarea>
                            <label htmlFor="" onClick={() => {
                                document.getElementById('checkbox').checked = true;
                            }}>
                                <input type="checkbox" name="" id="checkbox" />
                                * I confirm all the filled information is correct.
                            </label>
                            <label className='hr'></label>
                            <button type="submit">$27.99 Buy Now</button>
                        </div>
                    </form>
                    <h5>Terms of Use</h5>
                    <ul>
                        <li>
                            Gift card(s) purchased are digital only, non-refundable and non-exchangeable. Please make sure the accuracy of the quantity and filled information.</li>
                        <li>
                            Each gift card can only be redeemed once, and is valid for redeeming within the 1 year after purchase.</li>
                        <li>
                            The gift card email will be sent out the moment the order becomes effective.</li>
                        <li>
                            To learn more, please <a href="*">click here.</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardBody
