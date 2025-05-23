import React, { useEffect } from 'react'
import { useState } from 'react';
import "../sign-up/SignUp.scss"
import { useNavigate } from 'react-router-dom'


function SignUp() {


  const nav = useNavigate()


  const [formData, setFormData] = useState({
    owner: "",
    model: "",
    type: "",
    typeBenzin: "",
    owNumber: "",
    numberTaxi: "",
    date: "",
  });
  const [singup, setSingup] = useState(1);
  const [cleanData, setcleanData] = useState({
    companyName: "",
    inn: "",
    ogrn: "",
    address: "",
  }
  );

  const [Driver, setDriver] = useState({
    SurName: "",
    inn: "",
    Dl: "",
    category: "",
    dateFinish: "",
    dateStart: "",
    snils: "",
  });
  const allInfoLocal = JSON.parse(localStorage.getItem("allInfo"));

  const [allInfor, setAllInfor] = useState({})


  useEffect(() => {

    const savedData = JSON.parse(localStorage.getItem("signupData"));
    if (savedData) {
      setcleanData(savedData);

    }

    const savedDriver = JSON.parse(localStorage.getItem("Driver"));
    if (savedDriver) {
      setDriver(savedDriver);

    }
    const savedformData = JSON.parse(localStorage.getItem("formData"));
    if (savedformData) {
      setFormData(savedformData);

    }
  }, []);

  useEffect(() => {

    localStorage.setItem("signupData", JSON.stringify(cleanData))
    localStorage.setItem("Driver", JSON.stringify(Driver));
    localStorage.setItem("formData", JSON.stringify(formData));



  }, [cleanData, Driver, formData]);
  useEffect(() => {
    localStorage.setItem("allInfo", JSON.stringify(allInfor));
  }, [allInfor])




  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Жөнөтүлгөн маалыматтар:", formData);
  };
  const goToNextStepThree = () => {
    setSingup((prev) => prev + 1)
    setAllInfor(prev => ({
      ...prev, formData
    }))
  }

  const [touched, setTouched] = useState({ name: false, passport: false });

  const handleChhange = (e) => {
    setcleanData({
      ...cleanData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChhangeTwo = (e) => {
    setDriver({
      ...Driver,
      [e.target.name]: e.target.value,
    });
  };

  const handleChhangeThree = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  // const isValid = cleanData.name.trim() !== "" && cleanData.passport.trim() !== "";

  // const handleNext = () => {
  //   if (isValid) {
  //     setSingup(singup + 1);
  //   }
  // };
  const isValid = () =>
    cleanData.companyName.trim() !== "" &&
    cleanData.inn.trim() !== "" &&
    cleanData.ogrn.trim() !== "" &&
    cleanData.address.trim() !== "";

  const goToNextStep = () => {
    if (isValid()) {
      setSingup(singup + 1);
      setAllInfor(prev => ({
        ...prev, cleanData
      }))

      localStorage.setItem("allInfo", JSON.stringify(allInfor));
    }
  };

  const isValidTwo = () =>
    Driver.SurName.trim() !== "" &&
    Driver.inn.trim() !== "" &&
    Driver.Dl.trim() !== "" &&
    Driver.category.trim() !== "" &&
    Driver.dateFinish.trim() !== "" &&
    Driver.dateStart.trim() !== "" &&
    Driver.snils.trim() !== "";


  const goToNextStepTwo = () => {
    if (isValid()) {
      setSingup(singup + 1);
      setAllInfor(prev => ({
        ...prev, Driver
      }))


    }
  };

  const isValidThree = () =>
    formData.owner.trim() !== "" &&
    formData.model.trim() !== "" &&
    formData.type.trim() !== "" &&
    formData.typeBenzin.trim() !== "" &&
    formData.owNumber.trim() !== "" &&
    formData.numberTaxi.trim() !== "" &&
    formData.date.trim() !== "";


  const goToNextStepfour = () => {
    nav("/")


  };




  console.log("break", goToNextStep)
  console.log("test", allInfor)
  return (

    <div id='Signup'>
      {singup === 1 && (
        <div id='signup-1'>
          <div className='container'>
            <form onSubmit={handleSubmit} className="form">
              <h2 className="form-title">Регицтрация</h2>

              <div className="form-group">
                <label>Называние компании</label>
                <input
                  type="text"
                  name="companyName"
                  value={cleanData.companyName}
                  onChange={handleChhange}
                  onBlur={handleBlur}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: touched.name && cleanData.name.trim() === "" ? "2px solid red" : "1px solid #ccc",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                />
              </div>

              <div className="form-group">
                <label>ИНН</label>
                <input
                  type="text"
                  name="inn"
                  value={cleanData.inn}
                  onChange={handleChhange}
                  onBlur={handleBlur}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: touched.name && cleanData.name.trim() === "" ? "2px solid red" : "1px solid #ccc",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                />
              </div>

              <div className="form-group">
                <label>ОГРН</label>
                <input
                  type="text"
                  name="ogrn"
                  value={cleanData.ogrn}
                  onChange={handleChhange}
                  onBlur={handleBlur}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: touched.name && cleanData.name.trim() === "" ? "2px solid red" : "1px solid #ccc",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                />
              </div>

              <div className="form-group">
                <label>Адрес</label>
                <input
                  type="text"
                  name="address"
                  value={cleanData.address}
                  onChange={handleChhange}
                  onBlur={handleBlur}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: touched.name && cleanData.name.trim() === "" ? "2px solid red" : "1px solid #ccc",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                />
              </div>

              <button onClick={goToNextStep}
                disabled={!isValid()}
                style={{
                  padding: "10px 20px",
                  backgroundColor: isValid() ? "#007bff" : "#ccc",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: isValid() ? "pointer" : "not-allowed",
                }}
                className="submit-button">
                Далее
              </button>
            </form>
          </div>
        </div>
      )}
      {singup === 2 && (<div id='signup-2'>
        <div className='container'>
          <form onSubmit={handleSubmit} className="form">
            <h2 className="form-title">Регицтрация</h2>

            <div className="form-group">
              <label>ФИО</label>
              <input
                type="text"
                name="SurName"
                value={Driver.SurName}
                onChange={handleChhangeTwo}
                required
                onBlur={handleBlur}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: touched.name && Driver.name.trim() === "" ? "2px solid red" : "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>

            <div className="form-group">
              <label>ИНН</label>
              <input
                type="text"
                name="inn"
                value={Driver.inn}
                onChange={handleChhangeTwo}
                required
                onBlur={handleBlur}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: touched.name && Driver.name.trim() === "" ? "2px solid red" : "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>

            <div className="form-group">
              <label>DL</label>
              <input
                type="text"
                name="Dl"
                value={Driver.Dl}
                onChange={handleChhangeTwo}
                required
                onBlur={handleBlur}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: touched.name && Driver.name.trim() === "" ? "2px solid red" : "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>

            <div className="form-group">
              <select className='form-category' name="category" value={Driver.category} onChange={handleChhangeTwo}>
                <option value="">Категории</option>
                <option value="A">A</option>
                <option value="А1">B1</option>
                <option value="В">A2</option>
                <option value="В1">A2</option>
              </select>
            </div>

            <div className="form-group">
              <label>Дата окончания ВУ</label>
              <input
                type="datetime-local"
                name="dateFinish"
                value={Driver.dateFinish}
                onChange={handleChhangeTwo}
                required
                onBlur={handleBlur}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: touched.name && Driver.name.trim() === "" ? "2px solid red" : "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>

            <div className="form-group">
              <label>Дата выдачи ВУ</label>
              <input
                type="datetime-local"
                name="dateStart"
                value={Driver.dateStart}
                onChange={handleChhangeTwo}
                required
                onBlur={handleBlur}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: touched.name && Driver.name.trim() === "" ? "2px solid red" : "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>

            <div className="form-group">
              <label>СНИЛС</label>
              <input
                type="number"
                name="snils"
                value={Driver.snils}
                onChange={handleChhangeTwo}
                required
                onBlur={handleBlur}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: touched.name && Driver.name.trim() === "" ? "2px solid red" : "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>

            <button onClick={goToNextStepTwo}
              disabled={!isValidTwo()}
              style={{
                padding: "10px 20px",
                backgroundColor: isValidTwo() ? "#007bff" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: isValidTwo() ? "pointer" : "not-allowed",
              }}
              className="submit-button">
              Далее
            </button>
          </form>
        </div>
      </div>)}
      {singup === 3 && (<div id='signup-3'>
        <div className='container'>
          <form onSubmit={handleSubmit} className="form">
            <h2 className="form-title">Паспорт маалыматын толтуруңуз</h2>

            <div className="form-group">
              <label>Толук аты-жөнү</label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleChhangeThree}
                required
              />
            </div>

            <div className="form-group">
              <label>Паспорт номери</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChhangeThree}
                required
              />
            </div>

            <div className="form-group">
              <label>Берилген өлкө</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChhangeThree}
                required
              />
            </div>


            <div className="form-group">
              <select className='form-category' name="category" value={formData.typeBenzin} onChange={handleChhangeThree}>
                <option value="">Категории</option>
                <option value="A">A</option>
                <option value="А1">B1</option>
                <option value="В">A2</option>
                <option value="В1">A2</option>
              </select>
            </div>

            <div className="form-group">
              <label>Туулган күнү</label>
              <input
                type="text"
                name="owNumber"
                value={formData.owNumber}
                onChange={handleChhangeThree}
                required
              />
            </div>
            <div className="form-group">
              <label>Туулган күнү</label>
              <input
                type="text"
                name="numberTaxi"
                value={formData.numberTaxi}
                onChange={handleChhangeThree}
                required
              />
            </div>
            <div className="form-group">
              <label>Туулган күнү</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChhangeThree}
                required
              />
            </div>

            <button onClick={goToNextStepThree} type="submit" className="submit-button">
              Кийинкиге өтүү
            </button>
          </form>
        </div>
      </div>)}
      {singup === 4 && (<div id='signup-4'>
        <div className='container'>
          <form onSubmit={handleSubmit} className="form">
            <h2 className="form-title">Паспорт маалыматын толтуруңуз</h2>

            <div className="form-group">
              <label>Толук аты-жөнү</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Паспорт номери</label>
              <input
                type="text"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Берилген өлкө</label>
              <input
                type="text"
                name="issuedCountry"
                value={formData.issuedCountry}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Туулган күнү</label>
              <input
                type="text"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>

            <button onClick={goToNextStepfour} type="submit" className="submit-button">
              Кийинкиге өтүү
            </button>
          </form>
        </div>
      </div>)}


    </div>
  )
}

export default SignUp