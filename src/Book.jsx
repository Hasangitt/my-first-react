import './Book.css';
export default function Book({book}){
    const {name, Price} = book;
    return(
        <div className='book'>
            <h3>Book: {name}</h3>
            <p>Price: {Price}</p>
        </div>
    )
}