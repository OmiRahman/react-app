const head2 = "card app"
const decs="Dolor dolor est ipsum amet tempor ut aliquyam, duo et labore invidunt kasd voluptua labore, dolor ipsum diam voluptua consetetur."
const date = new Date();
const date_name = date.getDate();
const month_name = date.getMonth();
const year_name = date.getFullYear();


function Card(props){
    return <div className="card">
                <h3 className="cardTitle">{props.headtxt}</h3>
                <p className="decs">{props.bodytxt}</p>
                <p className="footer">{date_name+"/"+month_name+"/"+year_name}</p>

    </div>
}
export default Card;