import React from 'react';

function Best() {
    const images=[
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/41fff373-3403-4179-85c3-28ab311aad8f1641797994942-Anouk_Kurta-_Kurta_Sets_-_Saress_-_Min_60_OFF.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/179d2a89-913f-4f2f-836e-a8708b73cf911641797995012-HRX-_Puma_-_More.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/eec94a90-7526-4d6c-8274-9dffb5e2cbdc1641797994959-Best_of_Indian_wear.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/f933f5dc-cc86-4a06-87e8-e2923412d2921642132231668-2.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/7401e617-2f7a-4ec5-997d-8228c054d0eb1641798072265-International_Fashion.jpg",
]
return (<>
    <h1 className='container text-center mt-3 mb-3 line-through' id='deals'>BEST OF CLOTHING</h1>
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

export default Best;
