import { Container, List, MantineProvider, Text } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <MantineProvider
        theme={{
          colorScheme: "dark",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <Text fz={50} fw={800}>
            Welcome!
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
            <Text fz={20} fw={100}>
              I work as a Machine Learning Engineer in Chippercash, attempting
              to detect and prevent fraudulent actors in the P2P payments space.
            </Text>
          </Text>

          <List
            listStyleType="disc"
            sx={{
              marginTop: "5rem",
            }}
            fz={20}
            fw={100}
          >
            <List.Item>
              <Text>
                Developing fraud detection and prevention solutions at{" "}
                <Text span c="blue" inherit fw={500}>
                  Chippercash.
                </Text>
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
        </main>
      </MantineProvider>
    </>
  );
};

export default Home;
