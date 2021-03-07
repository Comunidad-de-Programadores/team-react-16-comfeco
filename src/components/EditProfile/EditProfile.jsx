import React from "react";
import "./EditProfile.scss";
import UserIcon from "../../assets/icon/UserIcon";
import PasswordIcon from "../../assets/icon/PasswordIcon";
import EmailIcon from "../../assets/icon/EmailIcon";
import ToolTips from "../ToolTips/ToolTips";
import style from "../../assets/style/Main.module.scss";
import { useGlobalContext } from "../../context/contextEditProfile";
import { FaTimes } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const EditProfile = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  const handleChange = (e) => {};
  const handleBlur = (e) => {};
  const FormInput = [
    {
      type: "username",
      name: "username",
      placeholder: "Usuario",
      icon: <UserIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Correo electrónico",
      icon: <EmailIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Contraseña",
      icon: <PasswordIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
    },
    {
      type: "password",
      name: "confirm",
      placeholder: "Confirmar contraseña",
      icon: <PasswordIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
    },
    {
      type: "text",
      name: "Biografía",
      placeholder: "Biografía",
      icon: <MdDescription />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
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
              <h2 className={`${style.title} title-edit`}>Editar Perfil</h2>
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
            <form className={`${style.Form} formulario`}>
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
              <input
                type="submit"
                className={style.btn}
                value="Guardar Cambios"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
