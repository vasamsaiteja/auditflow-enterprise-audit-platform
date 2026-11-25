import { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  Stack,
  Button,
  TableSortLabel,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import { auditLogs } from "../features/audit/auditLogsData";
import type { AuditLog, AuditStatus } from "../types/auditLog";

type SortOrder = "asc" | "desc";

export default function AuditLogsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [activityType, setActivityType] = useState("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredLogs = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return auditLogs
      .filter((log: AuditLog) => {
        const matchesSearch =
          log.user.toLowerCase().includes(searchValue) ||
          log.action.toLowerCase().includes(searchValue) ||
          log.description.toLowerCase().includes(searchValue) ||
          log.ipAddress.toLowerCase().includes(searchValue);

        const matchesStatus = status === "All" || log.status === status;

        const matchesActivity =
          activityType === "All" || log.activityType === activityType;

        return matchesSearch && matchesStatus && matchesActivity;
      })
      .sort((a, b) => {
        const dateA = new Date(a.timestamp).getTime();
        const dateB = new Date(b.timestamp).getTime();

        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      });
  }, [search, status, activityType, sortOrder]);

  const paginatedLogs = filteredLogs.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const handleReset = () => {
    setSearch("");
    setStatus("All");
    setActivityType("All");
    setSortOrder("desc");
    setPage(0);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(0);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    setPage(0);
  };

  const handleActivityChange = (value: string) => {
    setActivityType(value);
    setPage(0);
  };

  const handleSort = () => {
    setSortOrder((current) => (current === "asc" ? "desc" : "asc"));
  };

  const getStatusColor = (
    value: AuditStatus,
  ): "success" | "error" | "warning" => {
    switch (value) {
      case "Success":
        return "success";
      case "Failed":
        return "error";
      default:
        return "warning";
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Audit Logs
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Monitor and review application activities.
          </Typography>
        </Box>

        <Chip
          label={`${filteredLogs.length} records`}
          color="primary"
          variant="outlined"
        />
      </Stack>

      {/* Search and filters */}
      <Paper sx={{ p: 2, mb: 3 }} elevation={0} variant="outlined">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
        >
          <TextField
            fullWidth
            size="small"
            placeholder="Search user, action, description or IP..."
            value={search}
            onChange={(event) => handleSearch(event.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <SearchIcon
                    fontSize="small"
                    sx={{ mr: 1, color: "text.secondary" }}
                  />
                ),
              },
            }}
          />

          <TextField
            select
            size="small"
            label="Status"
            value={status}
            onChange={(event) => handleStatusChange(event.target.value)}
            sx={{ minWidth: { md: 150 }, width: { xs: "100%", md: 150 } }}
          >
            <MenuItem value="All">All Statuses</MenuItem>
            <MenuItem value="Success">Success</MenuItem>
            <MenuItem value="Failed">Failed</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </TextField>

          <TextField
            select
            size="small"
            label="Activity Type"
            value={activityType}
            onChange={(event) => handleActivityChange(event.target.value)}
            sx={{ minWidth: { md: 180 }, width: { xs: "100%", md: 180 } }}
          >
            <MenuItem value="All">All Activities</MenuItem>
            <MenuItem value="Authentication">Authentication</MenuItem>
            <MenuItem value="User Management">User Management</MenuItem>
            <MenuItem value="Data Update">Data Update</MenuItem>
            <MenuItem value="System">System</MenuItem>
          </TextField>

          <Button
            variant="outlined"
            color="inherit"
            startIcon={<RestartAltIcon />}
            onClick={handleReset}
            sx={{ whiteSpace: "nowrap", minWidth: "fit-content" }}
          >
            Reset
          </Button>
        </Stack>
      </Paper>

      {/* Audit logs table */}
      <TableContainer component={Paper} elevation={0} variant="outlined">
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>User</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
              <TableCell>
                <strong>Activity Type</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active
                  direction={sortOrder}
                  onClick={handleSort}
                >
                  <strong>Date & Time</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <strong>IP Address</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedLogs.length > 0 ? (
              paginatedLogs.map((log) => (
                <TableRow key={log.id} hover>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell sx={{ maxWidth: 260 }}>
                    {log.description}
                  </TableCell>
                  <TableCell>{log.activityType}</TableCell>
                  <TableCell>
                    <Chip
                      label={log.status}
                      color={getStatusColor(log.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    {new Date(log.timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell>{log.ipAddress}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 6 }}>
                  <Typography fontWeight={600}>No audit logs found</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Try changing your search or filters.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={filteredLogs.length}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(Number(event.target.value));
            setPage(0);
          }}
          rowsPerPageOptions={[5, 10, 15]}
        />
      </TableContainer>
    </Box>
  );
}
