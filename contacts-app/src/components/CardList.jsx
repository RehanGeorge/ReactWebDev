import Card from "./Card"

export default function CardList({ cardDetails }) {
    console.log(cardDetails);
    return (
        <div>
            {cardDetails.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    )
}