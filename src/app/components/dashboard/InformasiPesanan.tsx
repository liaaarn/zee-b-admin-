import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import DashboardCard from "@/app/components/shared/DashboardCard";

const products = [
  {
    id: "1",
    name: "Paket Nasi Ayam Goreng",
    post: "", // opsional, bisa dihapus jika tidak dipakai
    pname: "Asep",
    budget: "17.500",
    priority: "Selesai",
    pbg: "success.main",
  },
  {
    id: "2",
    name: "Paket Nasi Ayam Bakar",
    post: "",
    pname: "Budi",
    budget: "18.000",
    priority: "Pending",
    pbg: "warning.main",
  },
  {
    id: "3",
    name: "Paket Nasi Ayam Goreng",
    post: "",
    pname: "Iwan",
    budget: "17.500",
    priority: "Pending",
    pbg: "warning.main",
  },
  {
    id: "4",
    name: "Paket Nasi Ayam Bakar",
    post: "",
    pname: "Budi",
    budget: "18.000",
    priority: "Pending",
    pbg: "warning.main",
  },
  {
    id: "5",
    name: "Paket Nasi Ayam Bakar",
    post: "",
    pname: "Dudung",
    budget: "18.000",
    priority: "Pending",
    pbg: "warning.main",
  },
];

const InformasiPesanan = () => {
  return (
    <DashboardCard title="Infromasi pesanan">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  No
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Pesanan
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Nama
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2" fontWeight={600}>
                  Total harga
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2" fontWeight={600}>
                  Status
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {product.name}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {product.post}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    {product.pname}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">{product.budget}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Chip
                    sx={{
                      px: "4px",
                      backgroundColor: product.pbg,
                      color: "#fff",
                    }}
                    size="small"
                    label={product.priority}
                  ></Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default InformasiPesanan;
