"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PageContainer from "@/app/components/container/PageContainer";
// components
import InformasiPenjualan from "@/app/components/dashboard/InformasiPenjualan";
import YearlyBreakup from "@/app/components/dashboard/YearlyBreakup";
import SellingProducts from "@/app/components/dashboard/BestSelling";
import InformasiPesanan from "@/app/components/dashboard/InformasiPesanan";
import Menu from "@/app/components/dashboard/Menu";
import TotalPendapatan from "@/app/components/dashboard/TotalPendapatan";

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <InformasiPenjualan />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <TotalPendapatan />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <SellingProducts />
          </Grid>
          <Grid item xs={12} lg={8}>
            <InformasiPesanan />
          </Grid>
          <Grid item xs={12}>
            <Menu />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
