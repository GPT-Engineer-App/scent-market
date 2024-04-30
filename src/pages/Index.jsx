import { Box, Flex, Grid, Image, Text, Button, Heading, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const perfumes = [
  {
    id: 1,
    name: "Ocean Breeze",
    price: "$35",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHBlcmZ1bWV8ZW58MHx8fHwxNzE0NDc2NjkxfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Tropical Paradise",
    price: "$40",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBlcmZ1bWV8ZW58MHx8fHwxNzE0NDc2NjkyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Forest Rain",
    price: "$30",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBwZXJmdW1lfGVufDB8fHx8MTcxNDQ3NjY5Mnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Winter Whisper",
    price: "$45",
    image: "https://images.unsplash.com/photo-1448953663060-e7058b1bff12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBwZXJmdW1lfGVufDB8fHx8MTcxNDQ3NjY5Mnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box p={5} bg={bg}>
      <Heading mb={4} textAlign="center">
        Perfume Store
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {perfumes.map((perfume) => (
          <Box key={perfume.id} p={5} shadow="md" borderWidth="1px" rounded="md">
            <Image src={perfume.image} alt={perfume.name} borderRadius="md" />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              {perfume.name}
            </Text>
            <Text mt={2}>{perfume.price}</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" mt={3}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
