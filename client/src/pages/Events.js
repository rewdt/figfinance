import React, { useEffect } from 'react';
import { Button, Card, Grid, Paper, Typography } from '@mui/material';
import SelectPreferences from '../components/SelectPreferences';
import Api from '../utils/api';

const styles = {
  card: {
    minHeight: 250,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

function Events() {
  const [open, setOpen] = React.useState(true);
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async (categories = []) => {
    await Api()
      .getEvents(`?categories=${categories}`)
      .then((res) => {
        if (res.data) {
          setEvents(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCategoryChange = (selected) => {
    const selectedCategories = selected.map(({ value }) => value);
    fetchCategories(selectedCategories);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Paper
        sx={{
          p: 4,
        }}
      >
        <h1>Events</h1>
        <Grid container justifyContent={'flex-end'} columnGap={3}>
          <Grid item xs={12} sm={12} lg={6}></Grid>
          <Grid item xs={12} sm={12} lg={3}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleModalOpen}
            >
              Select Preferences
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            py: 4,
          }}
        >
          {events.map((el) => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={el._id}>
              <Card sx={styles.card}>
                <div>
                  <Typography variant="h6">{el.title}</Typography>
                  <Typography variant="body1">{el.description}</Typography>
                </div>
                <div>
                  <Typography variant="subtitle2">
                    Category: {el.category}
                  </Typography>
                </div>

                <div>
                  <Typography variant="subtitle2">
                    Address: {el.address}
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <SelectPreferences
        open={open}
        handleOpen={handleModalOpen}
        handleClose={handleModalClose}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default Events;
