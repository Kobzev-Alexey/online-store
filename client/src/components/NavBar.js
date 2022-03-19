import React, { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utills/consts";

const NavBar = () => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
        КупиДевайс
      </NavLink>
        
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} >Админ панель</Button>
            <Button variant={"outline-light"} className="ml-2">
              Войти
            </Button>
          </Nav>
        ) : (
          <Nav>
            <Button variant={"outline-light"}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;