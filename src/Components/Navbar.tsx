import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="bg-violet-500 sticky top-0 z-10">
      <Container maxWidth="xl" className="">
        <Toolbar disableGutters>
          <Avatar
            src="/images/logo.png"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography className="min-w-full">
                  <li className="hover:bg-gray-300 ">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:bg-gray-300 ">
                    <Link to="/Store">Products</Link>
                  </li>
                  <li className="hover:bg-gray-300 ">
                    <Link to="/About">About</Link>
                  </li>
                  <li className="hover:bg-gray-300 ">
                    <Link to="/review">Review</Link>
                  </li>
                  <li className="hover:bg-gray-300 ">
                    <Link to="/services">Services</Link>
                  </li>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Avatar
            src="/images/logo.png"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SHoes
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "inline-flex" }}
            >
              <ul className="flex gap-3 ">
                <li className="flex justify-around">
                  <Link to="/">Home</Link>
                </li>
                <li className="flex justify-around">
                  <Link to="/Store">Store</Link>
                </li>
                <li className="flex justify-around">
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/review">Review</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }} className="flex gap-6">
              <a
                href=""
                className="text-white hover:text-red-500 transition duration-500"
              >
                <FavoriteIcon />
              </a>
              <a
                href=""
                className="text-white hover:text-black transition duration-500"
              >
                <ShoppingCartOutlinedIcon />
              </a>
              <a
                href=""
                className="text-white hover:text-green-500 transition duration-500"
              >
                <PersonOutlineOutlinedIcon />
              </a>
            </IconButton>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
