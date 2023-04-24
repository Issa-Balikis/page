import kim from '../images/kim.jpg';

const Card = () => {
    return (
        <div className="card">
            <img 
            src={kim}
            alt="kim"
            className="img" 
           />
           <h1>Issa Balikis</h1>
           <h2 className='title'>Frontend Developer</h2>
           <h3 className='mail'>issabalikis@gmail.com</h3>
           <div className="button">
           <button className='email'>
            <i class="fa-solid fa-envelope"></i>
             Email</button>
           <button className='linkedin'>
            <i class="fa-brands fa-linkedin"></i>
            LinkedIn</button>
           </div>
        </div>
     );
}
 
export default Card;