import React from 'react';

function BestKids() {
    const images=[
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/b9b858a3-3379-463e-ae72-ccc6a844aec01641961373187-Kids_Hair_Accessory_-_Jewellery.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/e7e68320-1ae0-4d1c-a791-17de3220bef21642133764571-1.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/10b57521-3b77-4548-b95d-8cc7047f7adc1641961373249-Value_Packs_-_HellCat-_X2o.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/c63038f7-8f83-4843-bb7e-2b0443db36bb1641961373266-Winter_Wear_-_Pepe_Jeans-_G-J.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/21e0c14a-b3a5-4b0f-857e-e3f1296bbc3c1641961373240-UTH_by_Roadster.jpg",
]
return (<>
    <h1 className='container text-center mt-3 mb-3' id='deals'>BEST OF KIDS WEAR</h1>
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

export default BestKids;
