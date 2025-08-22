"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Menu as M, X } from "lucide-react";
import { useRouter } from "next/navigation";
import BlackButton from "../BlackButton/BlackButton";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <M></M>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            height: "70vh",
            width: "70%",
          },
        }}
      >
        <div className="flex flex-col gap-[2rem]  rounded-r-[1rem]">
          <div className="flex p-[5%] font-medium">
            <div className="w-[80%]">Меню</div>
            <X height={20} onClick={() => setAnchorEl(null)} />
          </div>
          <div className="flex flex-col ">
            {" "}
            <MenuItem
              onClick={() => router.push("/menu")}
              sx={{ fontSize: "0.9rem" }}
            >
              Главная
            </MenuItem>
            <MenuItem
              onClick={() => router.push("/price")}
              sx={{ fontSize: "0.9rem" }}
            >
              Цены
            </MenuItem>
            <MenuItem
              onClick={() => router.push("/menu")}
              sx={{ fontSize: "0.9rem" }}
            >
              Сравнение
            </MenuItem>
            <MenuItem
              onClick={() => router.push("/contacts")}
              sx={{ fontSize: "0.9rem" }}
            >
              Контакты
            </MenuItem>
          </div>
          <div className="flex flex-col p-[5%] gap-[0.6rem] border-t-[1px] border-gray-300">
            <MenuItem
              onClick={() => router.push("/logIn")}
              sx={{ fontSize: "0.9rem", padding: "0px" }}
            >
              Войти
            </MenuItem>
            <BlackButton
              url="sign-up"
              textSize="text-[0.9rem]"
              content="Регистрация"
              pad="p-[1%]"
            ></BlackButton>
          </div>
        </div>
      </Menu>
    </div>
  );
}
