import { useEffect, useState } from "react";
import crm from "./crm.module.sass";
import InputMask from "react-input-mask";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getSports } from "../../features/sportSlice";
import { postImage } from "../../features/imageSlice";
import { postPlayground } from "../../features/playgroundSlice";

function PostPlg() {
  const dispatch = useDispatch();

  const sports = useSelector((state) => state.sport.sports);
  const imagesIdArray = useSelector((state) => state.image.currentImageId);
  const loader = useSelector(state => state.playground.loading);

  const [error, setError] = useState(false);
  const [inputFields, setInputFields] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
    convenience: false,
    scheduleFrom: "",
    scheduleTo: "",
    surface: "",
    covered: false,
    shower: false,
    dressroom: false,
    lighting: false,
    parking: false,
    inventory: false,
    price: "",
    sport: "",
    photos: "",
  });

  useEffect(() => {
    dispatch(getSports());
  }, []);

  useEffect(() => {
    if (
      !inputFields.name ||
      !inputFields.address ||
      !inputFields.latitude ||
      !inputFields.longitude ||
      !inputFields.scheduleFrom ||
      !inputFields.scheduleTo ||
      !inputFields.surface ||
      !inputFields.price ||
      !inputFields.sport
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [inputFields]);

  let sportOptions = [];
  if (sports) {
    sports.forEach((item) => {
      sportOptions.push({
        value: item._id,
        label: item.name,
      });
    });
  }

  const surfaceOptions = [
    {
      value: "Grass (s)",
      label: "Синтетический газон",
    },
    {
      value: "Grass (n)",
      label: "Натуральный газон",
    },
    {
      value: "Parquet",
      label: "Паркет",
    },
  ];

  const inputHandler = (e, value, isCheckbox) => {
    if (!isCheckbox) {
      setInputFields({
        ...inputFields,
        [value]: e.target.value,
      });
    } else {
      setInputFields({
        ...inputFields,
        [value]: e.target.checked,
      });
    }
  };
  if (
    inputFields.convenience &&
    inputFields.scheduleFrom !== "00:00" &&
    inputFields.scheduleTo !== "23:59"
  ) {
    setInputFields({
      ...inputFields,
      scheduleFrom: "00:00",
      scheduleTo: "23:59",
    });
  }


  const handleSurfaceSelect = (data) => {
    setInputFields({
      ...inputFields,
      surface: data.value,
    });
  };

  const handleSportSelect = (data) => {
    setInputFields({
      ...inputFields,
      sport: data.value,
    });
  };

  const handleSubmit = () => {
    let data = {
      name: inputFields.name,
      address: inputFields.address,
      coordinates: `${inputFields.latitude}, ${inputFields.longitude}`,
      schedule: `${inputFields.scheduleFrom} - ${inputFields.scheduleTo}`,
      surface: inputFields.surface,
      covered: inputFields.covered,
      facilities: {
        shower: inputFields.shower,
        dressroom: inputFields.dressroom,
        lighting: inputFields.lighting,
        parking: inputFields.parking,
        inventory: inputFields.inventory,
      },
      price: inputFields.price,
      sport: inputFields.sport,
      photos: imagesIdArray ? imagesIdArray : undefined,
    };
    dispatch(postPlayground(data));
    if (!loader) {
      setInputFields({
        name: "",
        address: "",
        latitude: "",
        longitude: "",
        convenience: false,
        scheduleFrom: "",
        scheduleTo: "",
        surface: "",
        covered: false,
        shower: false,
        dressroom: false,
        lighting: false,
        parking: false,
        inventory: false,
        price: "",
        sport: "",
        photos: "",
      })
    }
  };

  const handleFile = (e) => {
    dispatch(postImage(e.target.files));
  };

  if(loader) {
    return 'Загрузка...'
  } else {
    return (
      <div className={crm.postPlg}>
        <form className={crm.postPlg__form}>
          <input
            type="text"
            onChange={(e) => inputHandler(e, "name")}
            placeholder="Название"
            value={inputFields.name}
          />
          <input
            type="text"
            onChange={(e) => inputHandler(e, "address")}
            placeholder="Адрес"
            value={inputFields.address}
          />
          <div className={crm.coordinates}>
            <InputMask
              mask="99.999999"
              type="text"
              placeholder="Широта"
              maskChar=""
              value={inputFields.latitude}
              onChange={(e) => inputHandler(e, "latitude")}
            />
            <InputMask
              mask="99.999999"
              type="text"
              placeholder="Долгота"
              maskChar=""
              value={inputFields.longitude}
              onChange={(e) => inputHandler(e, "longitude")}
            />
          </div>
  
          <div className={crm.checkbox}>
            <label htmlFor="convenience">Круглосуточно</label>
            <input
              type="checkbox"
              id="convenience"
              value={inputFields.convenience}
              onChange={(e) => inputHandler(e, "convenience", true)}
            />
          </div>
          <div className={crm.schedule}>
            График работы:
            <input
              type="time"
              value={inputFields.scheduleFrom}
              disabled={inputFields.convenience}
              onChange={(e) => inputHandler(e, "scheduleFrom")}
            />{" "}
            <span>-</span>
            <input
              type="time"
              value={inputFields.scheduleTo}
              disabled={inputFields.convenience}
              onChange={(e) => inputHandler(e, "scheduleTo")}
            />
          </div>
  
          <Select
            options={surfaceOptions}
            onChange={handleSurfaceSelect}
            placeholder="Покрытие"
          />
  
          <div className="checkbox">
            <label htmlFor="covered">Крытый</label>
            <input
              type="checkbox"
              id="covered"
              value={inputFields.covered}
              onChange={(e) => inputHandler(e, "covered", true)}
            />
          </div>
  
          <div className="checkbox">
            <label htmlFor="shower">Душ</label>
            <input
              type="checkbox"
              id="shower"
              value={inputFields.shower}
              onChange={(e) => inputHandler(e, "shower", true)}
            />
          </div>
  
          <div className="checkbox">
            <label htmlFor="dressroom">Раздевалка</label>
            <input
              type="checkbox"
              id="dressroom"
              value={inputFields.dressroom}
              onChange={(e) => inputHandler(e, "dressroom", true)}
            />
          </div>
  
          <div className="checkbox">
            <label htmlFor="lighting">Освещение</label>
            <input
              type="checkbox"
              id="lighting"
              value={inputFields.lighting}
              onChange={(e) => inputHandler(e, "lighting", true)}
            />
          </div>
  
          <div className="checkbox">
            <label htmlFor="parking">Парковка</label>
            <input
              type="checkbox"
              id="parking"
              value={inputFields.parking}
              onChange={(e) => inputHandler(e, "parking", true)}
            />
          </div>
  
          <div className="checkbox">
            <label htmlFor="inventory">Инвентарь</label>
            <input
              type="checkbox"
              id="inventory"
              value={inputFields.inventory}
              onChange={(e) => inputHandler(e, "inventory", true)}
            />
          </div>
  
          <label htmlFor="price">Цена за час</label>
          <input
            type="number"
            id="price"
            value={inputFields.price}
            onChange={(e) => inputHandler(e, "price")}
          />
  
          <label htmlFor="sport">Доступные виды спорта</label>
          <Select
            id="sport"
            options={sportOptions}
            placeholder="Спорт"
            onChange={handleSportSelect}
          />
  
          <label htmlFor="photo">Фотографии площадки</label>
          <input
            type="file"
            id="photo"
            accept="image/gif, image/jpeg, image/png, image/jpeg"
            name="sportImage"
            onChange={handleFile}
            multiple
          />
          {error && "Не все поля заполнены"}
          <input
            type="submit"
            value="Отправить"
            disabled={error}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          />
        </form>
      </div>
    );
  }

  

  
}
export default PostPlg;
