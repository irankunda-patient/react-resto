import Button from './Button'

const Card = ({ imgSrc, text, Pstyles , Cstyles}) => (
    <div className={`${Pstyles}`}>
        <div className={`${Cstyles}`}>
            <img src={imgSrc} alt="menu" className='object-contain sm:w-[150px] max-sm:w-[200px]'/>
        </div>
        <p className='font-popins font-bold'>{text}</p>
        <a href="#contact"><Button text='Order Now' styles='font-popins border border-indigo-950 p-3 rounded-full mt-2'/></a>
    </div>
)

export default Card
