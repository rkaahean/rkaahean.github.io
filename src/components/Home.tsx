import { Container, List, Text } from "@mantine/core";

export const Home = () => {
  return (
    <Container>
      <Text fz={50} fw={800}>
        Welcome to my website!
      </Text>
      <Text
        sx={{
          marginTop: "0rem",
        }}
        fz={30}
        fw={100}
      >
        <Text fz={30} fw={100}>
          My name is{" "}
          <Text span c="blue" inherit fw={500}>
            Ranjan Srinivas.
          </Text>
        </Text>
      </Text>

      <List
        sx={{
          marginTop: "5rem",
        }}
        fz={20}
        fw={100}
      >
        <List.Item>
          <Text>
            Current working at{" "}
            <Text span c="blue" inherit fw={500}>
              Chippercash
            </Text>
            , working on Fraud detection & prevention with ML.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            Residing in the best city in the world,{" "}
            <Text span c="blue" inherit fw={500}>
              Los Angeles.
            </Text>
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            Failing miserably at first person shooters, especially{" "}
            <Text span c="blue" inherit fw={500}>
              Apex Legends.
            </Text>
          </Text>
        </List.Item>
      </List>
    </Container>
  );
};
