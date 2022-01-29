import React from 'react';

function BestBeauty() {
    const images=[
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/685a4a92-0789-4dd7-838f-95a47ed6acae1641798338945-FRSH-_One8.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/02c1b08f-7f3f-47d0-a8ee-8b436ea3cc0c1642134127371-1.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/e38103cd-2e52-4730-9a23-a3474598afe71642134127364-2.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/6a8c20e0-94c7-428b-a878-27cbfb9f9a161642134127358-3.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/d0c65794-bcb7-4026-8f2c-2d7ed9a13ec01642134127351-4.jpg",
]
return (<>
    <h1 className='container text-center mt-3 mb-3' id='deals'>BEST OF Beauty & Personal CARE</h1>
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

export default BestBeauty;
