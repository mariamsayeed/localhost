import { Stack } from '@mui/material'
import DiscoverCard from './DiscoverCard'
import img1 from '../../assets/hero.png'
const Discover = () => {
  const CardData = [
    {
      city: 'Kolkata',
      state: 'West Bengal',
      venue: 'The Taj Hotel',
      cost: '₹ 500',
      description: 'Aao , Khao, Pio, Aish Kro.',
      rating: 4.5,
      reviewCount: 97,
      img: img1,
    },
    {
      city: 'Kolkata',
      state: 'West Bengal',
      venue: 'The Taj Hotel',
      cost: '₹ 500',
      description:
        'lsdfls fi ajd vvv vvvv vvvvv vvvvvv vvvvvvvv vvvvv vvvfhksd hfoisi rflk snfjdh.',
      rating: 4.5,
      reviewCount: 97,
      img: img1,
    },
    {
      city: 'Kolkata',
      state: 'West Bengal',
      venue: 'The Taj Hotel',
      cost: '₹ 500',
      description:
        'lsdfls fi ajd vvv vvvv vvvvv vvvvvv vvvvvvvv vvvvv vvvfhksd hfoisi rflk snfjdh.',
      rating: 4.5,
      reviewCount: 97,
      img: img1,
    },
  ]
  return (
    <Stack direction="row" justifyContent="space-around">
      {CardData.map((data, i) => (
        <DiscoverCard
          key={i}
          city={data.city}
          state={data.state}
          venue={data.venue}
          cost={data.cost}
          description={data.description}
          rating={data.rating}
          reviewCount={data.reviewCount}
          img={data.img}
        />
      ))}
    </Stack>
  )
}
export default Discover
