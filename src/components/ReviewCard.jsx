import { star } from "../assets/icons"


const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2.5">
        <img src={imgURL} width={120} height={120} className="rounded-full object-cover" />
        <p className="max-w-sm text-center info-text">{feedback}</p>
        <div className="flex justify-center items-center gap-2.5">
            <img src={star} width={24} height={24} className="object-contain m-0" />
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard