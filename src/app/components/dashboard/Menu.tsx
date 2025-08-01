import Link from "next/link";
import {
  CardContent,
  Typography,
  Grid,
  Rating,
  Tooltip,
  Fab,
} from "@mui/material";
import fotomenu1 from "/public/images/fotomenu1.jpg";
import fotomenu2 from "/public/images/fotomenu2.jpg";
import minuman1 from "/public/images/minuman1.jpg";
import minuman3 from "/public/images/minuman3.jpg";
import { Stack } from "@mui/system";
import { IconBasket } from "@tabler/icons-react";
import BlankCard from "@/app/components/shared/BlankCard";
import Image from "next/image";

const ecoCard = [
  {
    title: "Paket Nasi Ayam Goreng",
    subheader: "Nasi + Ayam + Tahu + Tempe + Asin + Sambal + Lalap",
    photo: fotomenu1,
    price: 17500,
    // rating: 4,
  },
  {
    title: "Paket Nasi Ayam Bakar",
    subheader: "Nasi + Ayam bakar + Tahu + Tempe + Asin + Sambal + Lalap",
    photo: fotomenu1,
    price: 18000,
    // rating: 5,
  },
  {
    title: "Teh Manis Dingin / Panas",
    subheader: "Teh manis dingin / panas",
    photo: minuman1,
    price: 5000,
    // rating: 3,
  },
  {
    title: "Jus Jeruk",
    subheader: "Jus jeruk",
    photo: minuman3,
    price: 9000,
    // rating: 2,
  },
];

const Menu = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Menu yang tersedia
      </Typography>
      <Grid container spacing={3}>
        {ecoCard.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <BlankCard sx={{ height: "100%", position: "relative" }}>
              <Link href="/editMenu">
                <Image
                  src={product.photo}
                  alt="img"
                  width={300}
                  height={200}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />
              </Link>

              {/* <Tooltip title="Add To Cart">
              <Fab
                size="small"
                color="primary"
                sx={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  zIndex: 2,
                  boxShadow: 2,
                }}
              >
                <IconBasket size="16" />
              </Fab>
            </Tooltip> */}

              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" noWrap>
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2, mt: 2 }}
                  noWrap
                >
                  {product.subheader}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center">
                    <Typography variant="h6">{product.price}</Typography>
                    <Typography
                      color="textSecondary"
                      ml={1}
                      sx={{ textDecoration: "line-through" }}
                    >
                      {/* {product.salesPrice} */}
                    </Typography>
                  </Stack>
                  {/* <Rating
                    name="read-only"
                    size="small"
                    value={product.rating}
                    readOnly
                  /> */}
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Menu;
