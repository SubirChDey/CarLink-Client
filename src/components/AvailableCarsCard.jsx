
const AvailableCarsCard = ({car}) => {
    const {carModel} = car || {}
  return (
    <div>
        <h3>cars: {carModel}</h3>
        
        
    </div>
  )
}

export default AvailableCarsCard