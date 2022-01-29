import React from 'react';

function BestHome() {
    const images=[
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/3fb72bac-fb58-4211-92d5-019a3fe7028e1641965162796-bedding-sets.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/37f14d7b-68a4-403d-bedd-363c74aed3cc1641799127684-Home_Furnishing.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/129b4ec1-7583-4b20-9ba2-6a3c5677546b1641799127627-Bath_Essentials.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/cef477e3-ba83-42bd-b3ba-3eff9bb2a9a51641799127692-Organisers.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/c8fcee4b-17a2-4c36-a9fd-de6579981ade1641799127650-Blankets_-_Quilts_min_50.jpg"
    
]
return (<>
    <h1 className='container text-center mt-3 mb-3' id='deals'>BEST OF HOME FURNISHING</h1>
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

export default BestHome;
