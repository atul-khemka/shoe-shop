import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className='flex justify-center items-center flex-wrap max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-col flex-1'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          The purpose of lorem ipsum is to create a natural looking block of
          text (sentence, paragraph, page, etc.) that doesnt distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          filler text can be very useful when the focus is meant to be on
          design, not content.{" "}
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop Now' iconUrl={arrowRight} />
          <Button label='Learn More' />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
