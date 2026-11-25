import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleTheme } from "../../app/store";

interface TopbarProps {
  title: string;
}

export default function Topbar({ title }: TopbarProps) {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "76px !important",
          px: { xs: 2, md: 4 },
          gap: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Workspace / {title}
          </Typography>

          <Typography fontWeight={800} fontFamily="Manrope" fontSize={18}>
            {title}
          </Typography>
        </Box>

        <TextField
          size="small"
          placeholder="Search anything..."
          sx={{
            width: { xs: 145, sm: 230, md: 270 },
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              bgcolor: "action.hover",
              fontSize: 13,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <Tooltip
          title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        >
          <IconButton
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle color theme"
          >
            {mode === "light" ? (
              <DarkModeRoundedIcon />
            ) : (
              <LightModeRoundedIcon />
            )}
          </IconButton>
        </Tooltip>

        <IconButton aria-label="Notifications">
          <NotificationsNoneRoundedIcon />
        </IconButton>

        <Avatar
          sx={{
            width: 34,
            height: 34,
            bgcolor: "primary.main",
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          SA
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}
