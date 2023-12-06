import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-col flex-1'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We provide you
          <span className='text-coral-red'> Super</span>
          <span className='text-coral-red'> Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)
         that doesnt distract from the layout. A practice not without controversy, laying out pages with meaningless
        </p>
        <p className="mt-6 lg:max-w-lg info-text">filler text can be very useful when the focus is meant to be on design, not content. </p>
        <div className="mt-11">
        <Button label='View Details' />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} width={570} height={522} className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
