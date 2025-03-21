import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Chip,
  CircularProgress,
  Snackbar,
  Alert,
  Tabs,
  Tab,
  IconButton,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL, getAuthHeader } from '../config/api';

// Status colors
const statusColors = {
  'New': 'primary',
  'In Progress': 'warning',
  'Resolved': 'success',
  'Closed': 'default'
};

// Tab Panel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const AdminPanel = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [statusValue, setStatusValue] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  
  const navigate = useNavigate();
  
  // Check if user is authenticated and is admin
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');
    
    if (!token || userRole !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);
  
  // Fetch enquiries
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('Authentication required. Please log in.');
          setLoading(false);
          return;
        }
        
        const response = await axios.get(`${API_URL}/enquiries`, getAuthHeader());
        
        setEnquiries(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching enquiries:', error);
        
        let errorMessage = 'Failed to fetch enquiries. Please try again.';
        
        if (error.response && error.response.data && error.response.data.error) {
          errorMessage = error.response.data.error;
        }
        
        setError(errorMessage);
        setLoading(false);
      }
    };
    
    fetchEnquiries();
  }, []);
  
  // Handle view enquiry
  const handleViewEnquiry = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setViewDialogOpen(true);
  };
  
  // Handle edit enquiry
  const handleEditEnquiry = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setStatusValue(enquiry.status);
    setEditDialogOpen(true);
  };
  
  // Handle delete enquiry
  const handleDeleteEnquiry = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setDeleteDialogOpen(true);
  };
  
  // Update enquiry status
  const updateEnquiryStatus = async () => {
    try {
      await axios.put(
        `${API_URL}/enquiries/${selectedEnquiry._id}`,
        { status: statusValue },
        getAuthHeader()
      );
      
      // Update local state
      setEnquiries(enquiries.map(enquiry => 
        enquiry._id === selectedEnquiry._id 
          ? { ...enquiry, status: statusValue } 
          : enquiry
      ));
      
      setEditDialogOpen(false);
      
      setSnackbar({
        open: true,
        message: 'Enquiry status updated successfully',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error updating enquiry:', error);
      
      let errorMessage = 'Failed to update enquiry status';
      
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      
      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error'
      });
    }
  };
  
  // Delete enquiry
  const deleteEnquiry = async () => {
    try {
      await axios.delete(
        `${API_URL}/enquiries/${selectedEnquiry._id}`,
        getAuthHeader()
      );
      
      // Update local state
      setEnquiries(enquiries.filter(enquiry => enquiry._id !== selectedEnquiry._id));
      
      setDeleteDialogOpen(false);
      
      setSnackbar({
        open: true,
        message: 'Enquiry deleted successfully',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error deleting enquiry:', error);
      
      let errorMessage = 'Failed to delete enquiry';
      
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      
      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error'
      });
    }
  };
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Handle snackbar close
  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };
  
  // Filter enquiries based on tab
  const filteredEnquiries = enquiries.filter(enquiry => {
    if (tabValue === 0) return true; // All
    if (tabValue === 1) return enquiry.status === 'New';
    if (tabValue === 2) return enquiry.status === 'In Progress';
    if (tabValue === 3) return enquiry.status === 'Resolved' || enquiry.status === 'Closed';
    return true;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Admin Panel
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Manage customer enquiries and requests
      </Typography>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ my: 4 }}>
          {error}
        </Alert>
      ) : (
        <Paper elevation={3} sx={{ overflow: 'hidden' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label={`All (${enquiries.length})`} />
              <Tab label={`New (${enquiries.filter(e => e.status === 'New').length})`} />
              <Tab label={`In Progress (${enquiries.filter(e => e.status === 'In Progress').length})`} />
              <Tab label={`Resolved (${enquiries.filter(e => e.status === 'Resolved' || e.status === 'Closed').length})`} />
            </Tabs>
          </Box>
          
          <TabPanel value={tabValue} index={0}>
            <EnquiriesTable 
              enquiries={filteredEnquiries} 
              handleViewEnquiry={handleViewEnquiry}
              handleEditEnquiry={handleEditEnquiry}
              handleDeleteEnquiry={handleDeleteEnquiry}
              formatDate={formatDate}
            />
          </TabPanel>
          
          <TabPanel value={tabValue} index={1}>
            <EnquiriesTable 
              enquiries={filteredEnquiries} 
              handleViewEnquiry={handleViewEnquiry}
              handleEditEnquiry={handleEditEnquiry}
              handleDeleteEnquiry={handleDeleteEnquiry}
              formatDate={formatDate}
            />
          </TabPanel>
          
          <TabPanel value={tabValue} index={2}>
            <EnquiriesTable 
              enquiries={filteredEnquiries} 
              handleViewEnquiry={handleViewEnquiry}
              handleEditEnquiry={handleEditEnquiry}
              handleDeleteEnquiry={handleDeleteEnquiry}
              formatDate={formatDate}
            />
          </TabPanel>
          
          <TabPanel value={tabValue} index={3}>
            <EnquiriesTable 
              enquiries={filteredEnquiries} 
              handleViewEnquiry={handleViewEnquiry}
              handleEditEnquiry={handleEditEnquiry}
              handleDeleteEnquiry={handleDeleteEnquiry}
              formatDate={formatDate}
            />
          </TabPanel>
        </Paper>
      )}
      
      {/* View Enquiry Dialog */}
      <Dialog
        open={viewDialogOpen}
        onClose={() => setViewDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        {selectedEnquiry && (
          <>
            <DialogTitle>
              <Typography variant="h5">Enquiry Details</Typography>
              <Chip 
                label={selectedEnquiry.status} 
                color={statusColors[selectedEnquiry.status]} 
                size="small"
                sx={{ ml: 2 }}
              />
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" color="text.secondary">
                  Submitted on {formatDate(selectedEnquiry.createdAt)}
                </Typography>
              </Box>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" color="text.secondary">Name</Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>{selectedEnquiry.name}</Typography>
                  
                  <Typography variant="subtitle2" color="text.secondary">Email</Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>{selectedEnquiry.email}</Typography>
                  
                  <Typography variant="subtitle2" color="text.secondary">Phone</Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>{selectedEnquiry.phone}</Typography>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" color="text.secondary">Enquiry Type</Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>{selectedEnquiry.enquiryType}</Typography>
                  
                  <Typography variant="subtitle2" color="text.secondary">Status</Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>{selectedEnquiry.status}</Typography>
                </Grid>
                
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2" color="text.secondary">Message</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>{selectedEnquiry.message}</Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setViewDialogOpen(false)}>Close</Button>
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => {
                  setViewDialogOpen(false);
                  handleEditEnquiry(selectedEnquiry);
                }}
              >
                Update Status
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      
      {/* Edit Enquiry Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
      >
        {selectedEnquiry && (
          <>
            <DialogTitle>Update Enquiry Status</DialogTitle>
            <DialogContent>
              <TextField
                select
                fullWidth
                label="Status"
                value={statusValue}
                onChange={(e) => setStatusValue(e.target.value)}
                margin="normal"
              >
                <MenuItem value="New">New</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Resolved">Resolved</MenuItem>
                <MenuItem value="Closed">Closed</MenuItem>
              </TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
              <Button 
                variant="contained" 
                color="primary"
                onClick={updateEnquiryStatus}
              >
                Update
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      
      {/* Delete Enquiry Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        {selectedEnquiry && (
          <>
            <DialogTitle>Delete Enquiry</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure you want to delete this enquiry from {selectedEnquiry.name}?
                This action cannot be undone.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
              <Button 
                variant="contained" 
                color="error"
                onClick={deleteEnquiry}
              >
                Delete
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      
      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

// Enquiries Table Component
const EnquiriesTable = ({ enquiries, handleViewEnquiry, handleEditEnquiry, handleDeleteEnquiry, formatDate }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Enquiry Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {enquiries.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                <Typography variant="body1" sx={{ py: 3 }}>
                  No enquiries found
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            enquiries.map((enquiry) => (
              <TableRow key={enquiry._id}>
                <TableCell>{enquiry.name}</TableCell>
                <TableCell>{enquiry.email}</TableCell>
                <TableCell>{enquiry.enquiryType}</TableCell>
                <TableCell>{formatDate(enquiry.createdAt)}</TableCell>
                <TableCell>
                  <Chip 
                    label={enquiry.status} 
                    color={statusColors[enquiry.status]} 
                    size="small" 
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton 
                    color="primary" 
                    onClick={() => handleViewEnquiry(enquiry)}
                    size="small"
                    title="View Details"
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton 
                    color="secondary" 
                    onClick={() => handleEditEnquiry(enquiry)}
                    size="small"
                    title="Update Status"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    color="error" 
                    onClick={() => handleDeleteEnquiry(enquiry)}
                    size="small"
                    title="Delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Grid component for dialog
const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: 'repeat(12, 1fr)',
  '& > .MuiGrid-item': {
    gridColumn: 'span 12',
    [theme.breakpoints.up('md')]: {
      '&[data-md="6"]': {
        gridColumn: 'span 6',
      },
    },
  },
}));

export default AdminPanel; 