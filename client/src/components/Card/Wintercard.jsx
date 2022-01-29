import React from 'react';

function Wintercard() {
    const images=[
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/5046ca81-d40b-4669-99ac-8ca35fa1e06a1641884921452-RTF-Winterwear_Pantaloons.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/378d6fae-cedb-4006-bb4e-d3805a9446fd1641884921431-RTF-Winterwear_Mango_H_M.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/2f9f27ab-5d79-46ac-beeb-487d9cb4fb271641884921417-RTF-Winterwear_HRx.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/5b7a32cd-715f-4d39-b8ab-cfb8a96426251641884921511-RTF-Winterwear_Wrogn_USPA.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/9677a355-d48f-44ca-a037-fa94400161cc1641884921466-RTF-Winterwear_Roadster.jpg",
]
return (<>
    <h1 className='container text-center mt-3 mb-3' id='deals'>Winter Wear Collection</h1>
    <div className='sm:w-full flex flex-row flex-wrap md:w-4/5 lg:w-full  p-3 container justify-center '>
        {images.map((image)=>{
            return (
                <div className='sm:w-2/5 h-96 md:w-4/12  lg:w-60 md:h-96 lg:h-96 p-3'>
                    <img src={image} alt='cards' className='w-full h-full '/>
                </div>
            )
        })}
    </div>
</>);
}

export default Wintercard;
