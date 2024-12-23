import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Paper, Button, Typography, Checkbox, FormControlLabel, Divider } from "@mui/material";

const CalendarDashboard = () => {
  const [eventFilters, setEventFilters] = useState({
    pessoal: true,
    negocios: true,
    familia: true,
    feriado: true,
    etc: true,
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

  return (
    <Box
      sx={{
        height: "calc(100% - 110px)", 
        width: "calc(100% - 50px)", 
        display: "flex",
        padding: "24px", 
        paddingTop: "80px",
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
      </Paper>
      <Box
  sx={{
    flex: 1,
    borderRadius: 2,
    backgroundColor: "#fff",
    boxShadow: "0 0 6px rgba(44, 110, 73, 0.3)",
    padding: "16px",
    "& .fc-button": {
      backgroundColor: "#6d8b50", // Cor de fundo
      border: "1px solid #4f6739", // Cor da borda
      color: "#fff", // Cor do texto
      borderRadius: "4px",
      padding: "5px 10px",
      fontWeight: "bold",
      textTransform: "none", // Remove o texto em maiúsculas
    },
    "& .fc-button:hover": {
      backgroundColor: "#4f6739", // Cor de fundo ao passar o mouse
      borderColor: "#6d8b50", // Cor da borda ao passar o mouse
    },
    "& .fc-button:focus, & .fc-button-active": {
      backgroundColor: "#4f6739", // Cor de fundo ativo
      borderColor: "#6d8b50",
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

    </Box>
  );
};

export default CalendarDashboard;
