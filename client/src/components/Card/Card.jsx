import React from 'react';

function Card() {
    const images=[
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/a92610b0-31b8-4956-abf6-a8b221d552051641702713619-Varanga-_Indo_Era.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/29251292-6dfd-42ff-96f3-b11dccd852041641702713416-Roadster_.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/c4d9620f-d8e6-4b4b-a5e8-c3a8b64f3cdb1642129866124-22.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/21/98c2ec1e-6aa7-44f3-9c82-c77d9d1f76f31642751478537-Sports_shoes_-_40-70_Off.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/11f7bfd7-fb66-4113-910c-32da0fef83351641702712780-Cutecumber_-_Stylobug.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/21/5f7e79da-52b9-477b-81df-906768db857b1642751478376-International_Styles___40-60_Off-_Gant-_Ben_Sherman_-_More.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/cf922420-56a2-4bad-a1b0-c08ef49cff351641966742655-Puma-_Adidas.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/8acbc2e3-48a6-43c5-913e-6f6326bc552f1641702712905-HRX.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/75768bd3-39b4-46a0-99fd-022893792ad41641966742815-Sojanya-_Deyann.jpg",
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/21/c53ba0e6-dcd8-41e8-bac8-20e65e9973631642751478527-Shirts_Min_50-70_-_HL-_Loco.jpg",
        
    ]
  return (<>
        <h1 className='container text-center mt-5 mb-3' id='deals'>UNBELIEVABLE  DEALS</h1>
    <div className='sm:w-full flex flex-row flex-wrap md:w-4/5 lg:w-full  p-3 container justify-center '>
        {images.map((image)=>{
            return (
                <div className='sm:w-1/2 h-96 md:w-4/12  lg:w-1/4 md:h-96 lg:h-96 p-3'>
                    <img src={image} alt='cards' className='w-full h-full '/>
                </div>
            )
        })}
    </div>
  </>);
}

export default Card;
