import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import EarningCard2 from './EarnigCard2';
import EarningCard3 from './EarningCard3';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import MuiTypography from '@mui/material/Typography';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing} sx={{ padding: 3 }}>
      <Grid>
        <MuiTypography variant="h1" gutterBottom>
          Beranda
        </MuiTypography>
        <MuiTypography variant="h4" gutterBottom>
          Selamat Datang, Novia
        </MuiTypography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} title={"Total Penawaran"} count={'4'} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard2 isLoading={isLoading} title={"Usulan Prodi Sudah Dinilai"} count={'6'}  />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard3 isLoading={isLoading} title={"Usulan Prodi Belum Dinilai"} count={'7'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
