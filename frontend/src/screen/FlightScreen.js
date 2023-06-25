import { useParams } from "react-router-dom"

function FlightScreen() {
    const params = useParams();
    const { slug } = params
    return (
        <div>
            {slug}
        </div>
    )
}


export default FlightScreen;