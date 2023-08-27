import React from "react";
import '../css/BookStyle.css';
import books from './boooks';

// const firstBook =
// {
//     Author:"Rebecca Yarros",
//     Image: "https://m.media-amazon.com/images/I/51j8bRH5sDL._SX307_BO1,204,203,200_.jpg",
//     Title:"Fourth Wing"
// } 

// const secondBook =
// {
//     Author:"Rebecca Yarros",
//     Image: "https://m.media-amazon.com/images/I/51AC2+BVowL._SY344_BO1,204,203,200_.jpg",
//     Title:"Iron Flame"
// }



const names = ['Mark', 'Gregory', 'Corpin'];
// const arrayNames = names.map((name) =>{
//     return(<h1>{name}</h1>);
// })

const BookList = () =>
{
    const getBook = (id) =>
    {
        const book = books.find((book) => book.id === id);
        console.log(book);
    }

    //getBook(2);

    return(
        <>
            <div className="pageTitle">
                <h1>Amazon Best Sellers</h1>
            </div>
            <section className="booklist">
                {/* <Book job='Developer'/>
                <Book title='Random Title' number={22}/>
                <Book/> */}
                
                {/* <Book Author={firstBook.Author} Image={firstBook.Image} Title={firstBook.Title}/>
                <Book Author={secondBook.Author} Image={secondBook.Image} Title={secondBook.Title}/> */}
                
                {/* {names.map((name) =>{
                    return(
                        <h1>{name}</h1>
                    );
                    })} */}

                {/* <EventHandling/> */}
                {books.map((book, id)=>{
                
                    return(
                        <div key={id}>
                            <Book {...book} getBook={getBook}/>
                        </div>
                    );
                })}
            </section>
        </>
        
    );
}

const EventHandling = () =>
{
    const OnChangeEvent = () =>
    {
        console.log("On Change");
    }

    const OnClickEvent = () =>
    {
        return alert('Hello World');
    }

    const OnClickSubmit = (e) =>
    {
        e.preventDefault();
        console.log("Submitted");
        alert("Submitted");
    }

    return(
        <div>
            <form onSubmit={OnClickSubmit}>
                <input type="text" onChange={OnChangeEvent} name="" id="" />
                <button onClick={OnClickEvent}>Click</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


const Book = (props) =>
{
    // const book ={
    //     Title:'Fourth Wing',
    //     Author:'Mark Gregory S. Corpin',
    //     Image: '../public/fourthWing.jpg'
    // };
    const {title, author,img,id,getBook } = props;
    
    const getSingleBook = () =>
    {
        getBook(id);
    }

    const DisplayTitle = () =>
    {
        alert(title);
    }

    return(
        <React.Fragment>
            <div className="book" key={id}    >
                <p style={{float:'left', marginBottom:'10px'}}># {id}</p>
                <img src={img}/>
                <h2>{title}</h2>
                <h4>{author}</h4>
 
                <button onClick={getSingleBook}>Click Me</button>
                
                {/* <p>{props.job}</p>
                <p>{props.title}</p>
                <p>{props.number}</p> */}
            </div>
        </React.Fragment>
    );
}

/*
const Image = () => <img src='../public/fourthWing.jpg'/>
const Title = () => <h2>Fourth Wing (The Empyrean, 1)</h2>
//inline style
const Author = () => {
    
    const authorHeader={
        color:'red'
    }

    return <h4 style={authorHeader}>by Rebecca Yarros</h4>
}*/

export default BookList;