import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useRouter } from "next/navigation";
import { Menu as MenuIcon } from "lucide-react";
export default function MenuButton() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon></MenuIcon>
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            "aria-labelledby": "fade-button",
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        // onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            router.push("/menu");
            setAnchorEl(null);
          }}
        >
          Главная
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/price");
            setAnchorEl(null);
          }}
        >
          Цены
        </MenuItem>
        {/* <MenuItem
          onClick={() => {
            router.push("/price");
            setAnchorEl(null);
          }}
        >
          Сравнение
        </MenuItem> */}
        {/* <MenuItem
          onClick={() => {
            router.push("/menu");
            setAnchorEl(null);
          }}
        >
          О нас
        </MenuItem> */}

        <MenuItem
          onClick={() => {
            router.push("/logIn");
            setAnchorEl(null);
          }}
        >
          Войти
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/sing-up");
            setAnchorEl(null);
          }}
        >
          Регистрация
        </MenuItem>
      </Menu>
    </div>
  );
}
