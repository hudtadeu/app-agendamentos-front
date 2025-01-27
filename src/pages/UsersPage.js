import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, IconButton, Box, Card, CardContent, Typography, TextField, Button, MenuItem, FormControl } from "@mui/material"; // Removed InputLabel and Select imports
import { Edit, Delete } from "@mui/icons-material";
import { Group, PersonAdd, Person, CheckCircle, Search } from "@mui/icons-material"; // Add CheckCircle and Search imports

const UsersPage = () => {
  const [status, setStatus] = useState("Ativo");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((user) => user.id);
      setSelectedUsers(newSelecteds);
      return;
    }
    setSelectedUsers([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelected = newSelected.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelected);
  };

  const isSelected = (id) => selectedUsers.indexOf(id) !== -1;

  const users = [
    { id: 1, username: "user1", email: "user1@example.com", contact: "123456789", status: "Ativo" },
    { id: 2, username: "user2", email: "user2@example.com", contact: "987654111", status: "Inativo" },
    { id: 3, username: "user3", email: "user3@example.com", contact: "987652222", status: "Inativo" },
    { id: 4, username: "user4", email: "user4@example.com", contact: "987653333", status: "Ativo" },
    { id: 4, username: "user5", email: "user5@example.com", contact: "987653333", status: "Ativo" },
    { id: 4, username: "user6", email: "user6@example.com", contact: "987653333", status: "Ativo" },
    { id: 4, username: "user7", email: "user7@example.com", contact: "987653333", status: "Ativo" },
    { id: 4, username: "user8", email: "user8@example.com", contact: "987653333", status: "Ativo" },
    { id: 4, username: "user9", email: "user9@example.com", contact: "987653333", status: "Ativo" },
    { id: 4, username: "user10", email: "use10@example.com", contact: "987653333", status: "Ativo" },
    { id: 4, username: "user11", email: "user11@example.com", contact: "987653333", status: "Ativo" },
    { id: 4, username: "user12", email: "user12@example.com", contact: "987653333", status: "Ativo" },
  ];

  const stats = [
    {
      title: "Sessão",
      value: "21.459",
      change: "+29%",
      description: "Total de usuários",
      icon: <Group style={{ fontSize: 20, color: "#6666cc" }} />,
      boxColor: "#ccccff",
      changeColor: "green",
    },
    {
      title: "Usuários pagos",
      value: "4.567",
      change: "+18%",
      description: "Análise da semana passada",
      icon: <PersonAdd style={{ fontSize: 20, color: "#cc6666" }} />,
      boxColor: "#ffcccc",
      changeColor: "green",
    },
    {
      title: "Usuários ativos",
      value: "19.860",
      change: "-14%",
      description: "Análise da semana passada",
      icon: <CheckCircle style={{ fontSize: 20, color: "#66cc66" }} />, // Updated icon color to green
      boxColor: "#ccffcc", // Updated box color to lighter green
      changeColor: "red",
    },
    {
      title: "Usuários Pendentes",
      value: "237",
      change: "+42%",
      description: "Análise da semana passada",
      icon: <Search style={{ fontSize: 20, color: "#cc9966" }} />, // Updated icon
      boxColor: "#ffebcc",
      changeColor: "green",
    },
  ];

  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" gap={2} flexWrap="wrap" mb={2}>
        {stats.map((stat, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 200px",
              maxWidth: "300px",
              borderRadius: 2,
              boxShadow: 3,
              height: "120px",
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle2" fontWeight="500">
                  {stat.title}
                </Typography>
                <Box
                  sx={{
                    backgroundColor: stat.boxColor,
                    borderRadius: 1,
                    padding: "4px",
                  }}
                >
                  {stat.icon}
                </Box>
              </Box>
              <Typography variant="h6" fontWeight="bold" mt={1} sx={{ display: 'flex', alignItems: 'center' }}>
                {stat.value} <Typography variant="caption" sx={{ color: stat.changeColor, marginLeft: 1 }}>({stat.change})</Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {stat.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} gap={2}>
        <TextField
          variant="outlined"
          size="small"
          value={status}
          onChange={handleStatusChange}
          sx={{
            minWidth: 120,
            "& .MuiOutlinedInput-root": {
              height: 36,
              "& fieldset": {
                borderColor: "#6d8b50",
              },
              "&:hover fieldset": {
                borderColor: "#4f6739",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#4f6739",
              },
            },
            "& .MuiSelect-select": {
              fontSize: "0.875rem",
            },
          }}
          select
        >
          <MenuItem value="Ativo" sx={{ fontSize: "0.875rem" }}>Ativo</MenuItem>
          <MenuItem value="Inativo" sx={{ fontSize: "0.875rem" }}>Inativo</MenuItem>
          <MenuItem value="Pendente" sx={{ fontSize: "0.875rem" }}>Pendente</MenuItem>
        </TextField>
        <Box display="flex" gap={2}>
          <TextField
            variant="outlined"
            placeholder="Pesquisar usuário"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 36,
                "& fieldset": {
                  borderColor: "#6d8b50",
                },
                "&:hover fieldset": {
                  borderColor: "#4f6739",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#4f6739",
                },
              },
              "& .MuiInputBase-input": {
                fontSize: "0.875rem",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6d8b50",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#4f6739",
              },
            }}
          >
            Novo Usuário
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#ddd" }}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  size="small"
                  indeterminate={selectedUsers.length > 0 && selectedUsers.length < users.length}
                  checked={users.length > 0 && selectedUsers.length === users.length}
                  onChange={handleSelectAllClick}
                  sx={{
                    color: "#6d8b50",
                    "&.Mui-checked": {
                      color: "#6d8b50",
                    },
                    "&.MuiCheckbox-indeterminate": {
                      color: "#6d8b50",
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>USUÁRIO</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>E-MAIL</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>CONTATO</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>STATUS</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>AÇÕES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              const isItemSelected = isSelected(user.id);
              return (
                <TableRow
                  key={user.id}
                  onClick={(event) => handleClick(event, user.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      size="small"
                      checked={isItemSelected}
                      sx={{
                        color: "#6d8b50",
                        "&.Mui-checked": {
                          color: "#6d8b50",
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>{user.username}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>{user.email}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>{user.contact}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>{user.status}</TableCell>
                  <TableCell>
                    <IconButton size="small">
                      <Edit fontSize="inherit" sx={{ fontSize: "1rem" }} />
                    </IconButton>
                    <IconButton size="small">
                      <Delete fontSize="inherit" sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersPage;
