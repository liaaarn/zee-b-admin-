import {
  Box,
  CardContent,
  Chip,
  Paper,
  Stack,
  Typography,
  LinearProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

const sells: any = [
  {
    product: "Paket Nasi Ayam Goreng ",
    price: "17.500",
    percent: 55,
    color: "primary",
  },
  {
    product: "Paket Nasi Ayam Bakar",
    price: "18.000",
    percent: 20,
    color: "secondary",
  },
];

const SellingProducts = () => {
  const theme = useTheme();
  const secondarylight = theme.palette.secondary.light;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const primary = theme.palette.primary.main;
  const borderColor = theme.palette.divider;

  return (
    <Paper
      sx={{ bgcolor: "primary.main", border: `1px solid ${borderColor}` }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" color="white">
          Produk terlaris
        </Typography>
        <Typography variant="subtitle1" color="white" mb={4}>
          Dalam 1 minggu
        </Typography>

        <Box textAlign="center" mt={2} mb="-40px">
          <Image
            src="/images/foto.jpg"
            alt="SavingsImg"
            width="300"
            height="220"
          />
        </Box>
      </CardContent>
      <Paper
        sx={{
          overflow: "hidden",
          zIndex: "1",
          position: "relative",
          margin: "10px",
          mt: "-43px",
        }}
      >
        <Box p={3}>
          <Stack spacing={3}>
            {sells.map((sell: any, i: number) => (
              <Box key={i}>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6">{sell.product}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {sell.price}
                    </Typography>
                  </Box>
                  <Chip
                    sx={{
                      backgroundColor:
                        sell.color === "primary"
                          ? primarylight
                          : secondarylight,
                      color: sell.color === "primary" ? primary : secondary,
                      borderRadius: "4px",
                      width: 55,
                      height: 24,
                    }}
                    label={sell.percent + "%"}
                  />
                </Stack>
                <LinearProgress
                  value={sell.percent}
                  variant="determinate"
                  color={sell.color}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Paper>
    </Paper>
  );
};

export default SellingProducts;
