import { useState } from "react";
import {
  Typography,
  Box,
  useTheme,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        {/* Sidebar */}
        <Box
          backgroundColor={colors.primary[400]}
          p="15px"
          flex="1 1 20%"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            <ListItem>
              <ListItemText></ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              start: "prev,next today",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
          />
        </Box>
      </Box>
    </Box>
  );
}
