"use client";

import { Box, Button, Grid, Stack } from "@mui/material";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/components/container/PageContainer";
import BlankCard from "@/app/components/shared/BlankCard";
import GeneralCard from "@/app/components/forms/GeneralCard";
import MediaCard from "@/app/components/forms/MediaCard";
import Thumbnail from "@/app/components/forms/Thumbnail";
import StatusCard from "@/app/components/forms/Status";
import PricingCard from "@/app/components/forms/Pricing";
import ProductTemplate from "@/app/components/forms/ProductTemplate";
import { useRouter } from "next/navigation";
import React from "react";

const BCrumb = [
  {
    to: "/",
    title: "Home-Dashboard",
  },
  {
    title: "Edit Menu",
  },
];

const EcommerceEditProduct = () => {
  const router = useRouter();

  return (
    <PageContainer title="Edit Menu" description="this is Edit Menu">
      <Breadcrumb title="Edit Menu" items={BCrumb} />

      <form>
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <Stack spacing={3}>
              <BlankCard>
                <GeneralCard />
              </BlankCard>

              <BlankCard>
                <PricingCard />
              </BlankCard>
            </Stack>
          </Grid>

          <Grid item lg={4}>
            <Stack spacing={3}>
              <BlankCard>
                <Thumbnail />
              </BlankCard>

              <BlankCard>
                <StatusCard />
              </BlankCard>

              <BlankCard>
                <ProductTemplate />
              </BlankCard>
            </Stack>
          </Grid>
        </Grid>

        <Stack direction="row" spacing={2} mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("Data disimpan!");
              router.push("/dashboard");
            }}
          >
            Simpan perubahan
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => router.back()}
          >
            Batal
          </Button>
        </Stack>
      </form>
    </PageContainer>
  );
};

export default EcommerceEditProduct;
