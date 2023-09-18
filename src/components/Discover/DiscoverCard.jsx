/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
const DiscoverCard = ({
  city,
  state,
  venue,
  cost,
  description,
  rating,
  reviewCount,
  img,
}) => {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#d7fff1',
    },
  })
  return (
    <div>
      <Card
        sx={{
          height: '450px',
          width: '350px',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <CardMedia sx={{ height: '225px' }} image={img} />
        <CardContent sx={{ height: '42%', bgcolor: '#2B3030' }}>
          <Stack height="100%" justifyContent="space-around">
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontSize: '12px',
                color: '#d7fff1',
              }}
            >
              {city} . {state}
            </Typography>
            <Stack direction="row" justifyContent={'space-between'}>
              <Typography sx={{ fontSize: '16px' }}>{venue}</Typography>
              <Typography sx={{ fontSize: '16px', marginRight: '40px' }}>
                {cost}
              </Typography>
            </Stack>
            <Box>
              <Typography
                sx={{
                  fontSize: '14px',
                  margin: '15px 0',
                  color: '#d7fff1',
                  lineHeight: '25px',
                  marginRight: '50px',
                }}
              >
                {description}
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <StyledRating defaultValue={rating} precision={0.5} readOnly />
              <Typography sx={{ fontSize: '14px', color: '#d7fff1' }}>
                {reviewCount} Reviews
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  )
}
export default DiscoverCard
