import React from 'react';

function Brands() {
    const images=[
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/2218abb9-e40f-4e43-abce-dfb022e34f671641877277825-Levis.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/3a7dbe60-6aab-4d5e-8b05-aff113dba13e1641877277893-UCB_1.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/f559ad84-915d-470b-83b1-cf7c889a6a391641877277877-U.S._Polo_Assn..jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/787a36a1-b57d-4c96-8057-ff80748abee71641877277817-Jack_-_Jones.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/0f5b184b-4228-49e8-b5b9-5f66944ff8c81642057411413-fm.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/0b6d70ea-809b-4a83-88fa-edfac575418f1642070092339-image_jpeg1610275137.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/72647bad-dd76-447d-9eab-b5254cb989631642069093033-boat-home.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/a020270d-e6e6-478e-8543-f558d5451be91642070092355-image_jpeg771926449.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/01decb45-54d3-4d8a-8042-f7f58dfbc78f1642064707706-ck.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/49d665a9-daf6-4bf4-9534-803cf18731b61642052041267-Lakme_HP-Tile_Jan-15_Revised.jpg",
]
return (<>
    <h1 className='container text-center mt-3 mb-3' id='deals'>TOP BRANDS ON OFFER</h1>
    <div className='sm:w-full flex flex-row flex-wrap md:w-4/5 lg:w-full  p-3 container justify-center '>
        {images.map((image)=>{
            return (
                <div className='sm:w-2/5 h-96 md:w-4/12  lg:w-60 md:h-96 lg:h-96 p-3'>
                    <img src={image} alt='cards' className='w-full h-full '/>
                </div>
            )
        })}
    </div>
</>);;
}

export default Brands;
