import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  Paper,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
  Modal,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const CalendarDashboard = () => {
  const [eventFilters, setEventFilters] = useState({
    pessoal: true,
    negocios: true,
    familia: true,
    feriado: true,
    etc: true,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    category: "familia",
    startDate: "",
    endDate: "",
    allDay: false,
    url: "",
    location: "",
    description: "",
  });

  const events = [
    { title: "12ª Jantar", start: "2024-12-18", category: "pessoal", color: "#FFD580" },
    { title: "Jogo de dardos?", start: "2024-12-18", category: "etc", color: "#87CEEB" },
    { title: "12ª Consulta médica", start: "2024-12-20", category: "pessoal", color: "#FF7F7F" },
    { title: "Reunião com o cliente", start: "2024-12-20", category: "negocios", color: "#9370DB" },
    { title: "Viagem em família", start: "2024-12-23", category: "familia", color: "#90EE90" },
  ];

  const filteredEvents = events.filter((event) => eventFilters[event.category]);

  const toggleFilter = (category) => {
    setEventFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNewEvent({
      title: "",
      category: "familia",
      startDate: "",
      endDate: "",
      allDay: false,
      url: "",
      location: "",
      description: "",
    });
  };

  return (
    <Box
      sx={{
        height: "calc(100% - 60px)",
        width: "calc(100% - 50px)",
        display: "flex",
        padding: "24px",
        paddingTop: "30px",
        gap: "16px",
      }}
    >
      <Paper
        sx={{
          width: 260,
          padding: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
          boxShadow: "0 0 6px rgba(44, 110, 73, 0.3)",
          overflowY: "auto",
        }}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={() => setIsModalOpen(true)}
          sx={{
            mb: 3,
            backgroundColor: "#6d8b50",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#4f6739",
            },
          }}
        >
          + Adicionar Evento
        </Button>
        <Typography variant="h6" gutterBottom sx={{ color: "#4f6739" }}>
          Filtros de Eventos
        </Typography>
        <Divider sx={{ mb: 2, borderColor: "#6d8b50" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={Object.values(eventFilters).every(Boolean)}
                onChange={(e) =>
                  setEventFilters({
                    pessoal: e.target.checked,
                    negocios: e.target.checked,
                    familia: e.target.checked,
                    feriado: e.target.checked,
                    etc: e.target.checked,
                  })
                }
                sx={{
                  color: "#6d8b50",
                  "&.Mui-checked": {
                    color: "#4f6739",
                  },
                }}
              />
            }
            label="Selecionar Todos"
            sx={{ color: "#4f6739" }}
          />
          {Object.keys(eventFilters).map((key) => (
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  checked={eventFilters[key]}
                  onChange={() => toggleFilter(key)}
                  sx={{
                    color: "#6d8b50",
                    "&.Mui-checked": {
                      color: "#4f6739",
                    },
                  }}
                />
              }
              label={
                {
                  pessoal: "Pessoal",
                  negocios: "Negócios",
                  familia: "Família",
                  feriado: "Feriado",
                  etc: "Outros",
                }[key] || key.charAt(0).toUpperCase() + key.slice(1)
              }
              sx={{ color: "#4f6739" }}
            />
          ))}
        </Box>
      </Paper>
      <Box
        sx={{
          flex: 1,
          borderRadius: 2,
          backgroundColor: "#fff",
          boxShadow: "0 0 6px rgba(44, 110, 73, 0.3)",
          padding: "16px",
          "& .fc-button": {
            backgroundColor: "#6d8b50",
            border: "1px solid #4f6739",
            color: "#fff",
            borderRadius: "4px",
            padding: "5px 10px",
            fontWeight: "bold",
            textTransform: "none",
            boxShadow: "none",
          },
          "& .fc-button:hover": {
            backgroundColor: "#4f6739",
            borderColor: "#6d8b50",
          },
          "& .fc-button:focus": {
            backgroundColor: "#4f6739",
            borderColor: "#6d8b50",
            boxShadow: "none",
          },
          "& .fc-button:active, & .fc-button-active": {
            backgroundColor: "#4f6739",
            borderColor: "#6d8b50",
            outline: "none",
            boxShadow: "none !important",
          },
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek",
          }}
          events={filteredEvents}
          editable
          selectable
          locale="pt-br"
          height="100%"
          buttonText={{
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Lista",
          }}
          titleFormat={{
            year: "numeric",
            month: "long",
            day: "numeric",
          }}
          dayHeaderFormat={{ weekday: "long" }}
        />
      </Box>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            maxHeight: "80vh", // Set maximum height
            overflowY: "auto", // Enable scrolling if content overflows
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" mb={2}>
            Adicionar Evento
          </Typography>
          <TextField
            fullWidth
            label="Título"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ background: "white", padding: "0 4px" }}>Rótulo</InputLabel>
            <Select
              value={newEvent.category}
              onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
            >
              <MenuItem value="pessoal">Pessoal</MenuItem>
              <MenuItem value="negocios">Negócios</MenuItem>
              <MenuItem value="familia">Família</MenuItem>
              <MenuItem value="feriado">Feriado</MenuItem>
              <MenuItem value="etc">Outros</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            type="date"
            label="Data de início"
            InputLabelProps={{ shrink: true }}
            value={newEvent.startDate}
            onChange={(e) => setNewEvent({ ...newEvent, startDate: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="date"
            label="Data de término"
            InputLabelProps={{ shrink: true }}
            value={newEvent.endDate}
            onChange={(e) => setNewEvent({ ...newEvent, endDate: e.target.value })}
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={newEvent.allDay}
                onChange={(e) => setNewEvent({ ...newEvent, allDay: e.target.checked })}
              />
            }
            label="O dia todo"
          />
          <TextField
            fullWidth
            label="URL do evento"
            value={newEvent.url}
            onChange={(e) => setNewEvent({ ...newEvent, url: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Localização"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Descrição"
            multiline
            rows={3}
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              onClick={handleModalClose}
              sx={{ backgroundColor: "#6d8b50", "&:hover": { backgroundColor: "#4f6739" } }}
            >
              Adicionar
            </Button>
            <Button
              onClick={handleModalClose}
              sx={{
                color: "#6d8b50",
                border: "1px solid #6d8b50", // Added green border
              }}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default CalendarDashboard;