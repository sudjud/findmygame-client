import crm from './crm.module.sass'

function PostPlg() {

  const inputFields = {
    name: '',
    address: '',
    latitude: '',
    longitude: '',
    convenience: false,
    schedule: '',
    surface: '',
    covered: '',
    shower: '',
    dressroom: '',
    lighting: '',
    parking: '',
    inventory: '',
    price: '',
    sport: '',
    photos: '',
    
  }

  return (
    <div className={crm.postPlg}>
      <form className={crm.postPlg__form}>
        <input type="text" value={inputFields.name}/>
        <input type="text" value={inputFields.address}/> 
        <div className={crm.coordinates}>
          <input type="text" value={inputFields.latitude}/>
          <input type="text" value={inputFields.longitude}/>
        </div>
        <input type="text" value={inputFields.schedule}/>
        <div className={crm.schedule}>
          <input type="checkbox" value={inputFields.convenience}/>
          <input type="checkbox" value={inputFields.convenience}/>
        </div>
        <input type="text" value={inputFields.surface}/>
        <input type="checkbox" value={inputFields.covered}/>
        <input type="checkbox" value={inputFields.shower}/>
        <input type="checkbox" value={inputFields.dressroom}/>
        <input type="checkbox" value={inputFields.lighting}/>
        <input type="checkbox" value={inputFields.parking}/>
        <input type="checkbox" value={inputFields.inventory}/>
        <input type="text" value={inputFields.price}/>
        <input type="text" value={inputFields.sport}/>
        <input type="file" />
      </form>
    </div>
  )
};
export default PostPlg;