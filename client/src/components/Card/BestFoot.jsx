import React from 'react';

function BestFoot() {
    const images=[
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/fcc15340-01ce-478a-9ec6-d5cc41ca6cdd1641966565083-nike.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/67f2cb86-123f-4355-8767-d1d3b54377f71642133145751-6.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/9be97bd5-726d-406b-8c62-1d560dee961a1641800000212-Crocs_and_Skechers_.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/d87828fa-779b-47c0-b8b8-6560c1a72a581641800000145-Asics_-_Fila_.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/a79f8c5f-0082-4f06-bcb9-1b0cdcf639ea1641800000311-Nike_Kids.jpg",
]
return (<>
    <h1 className='container text-center mt-3 mb-3' id='deals'>BEST OF FOOTWEAR</h1>
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

export default BestFoot;
