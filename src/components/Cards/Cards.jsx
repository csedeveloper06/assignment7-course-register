import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cards,setCards] = useState([]);

    useEffect(() => {
        fetch('cardsInfo.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className="pb-8">
            <h1 className="font-bold text-3xl text-center p-12">
                Course Registration
            </h1>
           <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
             {
                cards.map(card => <Card key={card.id} card={card}></Card>)
             }
           </div>
            
        </div>
    );
};

export default Cards;