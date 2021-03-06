import React from "react";
import "./EditProfile.scss";
import UserIcon from "../../assets/icon/UserIcon";
import PasswordIcon from "../../assets/icon/PasswordIcon";
import EmailIcon from "../../assets/icon/EmailIcon";
import Error from "../Error/Error";
import ToolTips from "../ToolTips/ToolTips";
import style from "../../assets/style/Main.module.scss";
import { useGlobalContext } from "../../context/contextEditProfile";
import { FaTimes } from "react-icons/fa";

const EditProfile = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const FormInput = [
    {
      type: "username",
      name: "username",
      placeholder: "Usuario",
      icon: <UserIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: username,
      error: errors.username && <Error>{errors.username}</Error>,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Correo electrónico",
      icon: <EmailIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: email,
      error: errors.email && <Error>{errors.email}</Error>,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Contraseña",
      icon: <PasswordIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: password,
      error: errors.password && <Error>{errors.password}</Error>,
    },
    {
      type: "password",
      name: "confirm",
      placeholder: "Confirmar contraseña",
      icon: <PasswordIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: confirm,
      error: errors.confirm && <Error>{errors.confirm}</Error>,
    },
  ];
  return (
    <>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <div className="myprofile--top">
            <div className="top--profile">
              <img
                src="https://source.unsplash.com/random/250x250"
                alt="Foto de Perfil"
              />
            </div>
          </div>
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes></FaTimes>
          </button>
          <div className="fromEdit">
            <form
              onSubmit={handleSubmit}
              className={`${style.Form} ${style.signUpForm}`}
              noValidate
            >
              <h2 className={style.title}>Registro</h2>
              {FormInput.map((item, i) => {
                return (
                  <span key={i}>
                    <div className={item.classContainer}>
                      {item.icon}
                      {item.type !== "password" ? (
                        <input
                          type={item.type}
                          name={item.name}
                          placeholder={item.placeholder}
                          className={item.classInput}
                          value={item.value}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      ) : (
                        <ToolTips data="El password debe contener minimo 8 carateres">
                          <input
                            type={item.type}
                            name={item.name}
                            placeholder={item.placeholder}
                            className={item.classInput}
                            value={item.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </ToolTips>
                      )}
                    </div>
                    {item.error}
                  </span>
                );
              })}
              <span className={style.terms}>
                <ToolTips data="Debes aceptar las politicas de privacidad para continuar">
                  <input
                    type="checkbox"
                    name="privacity"
                    className={style.checkbox}
                    value={accept}
                    onChange={handleCheckbox}
                  />
                  <label htmlFor="privacity">
                    Acepta que estás de acuerdo con los Términos de servicio.
                    Para obtener más información sobre las prácticas de
                    privacidad, consulte la &nbsp;
                    <Link to="/politicas-de-privacidad" target="_blank">
                      Declaración de privacidad.
                    </Link>
                  </label>
                </ToolTips>
              </span>
              <input type="submit" className={style.btn} value="Registrarse" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
