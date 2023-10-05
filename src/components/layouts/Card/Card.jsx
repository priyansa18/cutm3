import { Card,Text, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import Engineering from "../../../assets/Engineering.glb";
import Anatomy from "../../../assets/AnatomyDD.glb";
import Building from "../../../assets/BuildingArch.glb";
import Entertainment from "../../../assets/Entertainment.glb";
import Tourism from "../../../assets/Tourism.glb";

function CardBox() {
  return (
    <>
      <section className="px-4 py-4 bg-gray-900">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 px-4 lg:grid-cols-4">
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            className="bg-gradient-to-r from-sky-400 to-blue-500"
          >
            <Card.Section>
              <model-viewer
                id="arch_model"
                src={Anatomy}
                disable-zoom
                ar
                ar-modes="webxr scene-viewer quick-look"
                seamless-poster
                shadow-intensity="1"
                camera-controls
                style={{ width: "100%", height: "300px" }}
              ></model-viewer>
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
              <Text weight={700} size={30} color={"white"}>
                Anatomy
              </Text>
            </Group>

            <Link to="/anatomy">
              <Group position="center">
                <Text className="px-16 py-2 bg-blue-800 text-white rounded-sm font-semibold">
                  Explore
                </Text>
              </Group>
            </Link>
          </Card>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            className="bg-gradient-to-r from-sky-400 to-blue-500"
          >
            <Card.Section>
              <model-viewer
                id="arch_model"
                src={Engineering}
                disable-zoom
                ar
                ar-modes="webxr scene-viewer quick-look"
                seamless-poster
                shadow-intensity="1"
                camera-controls
                style={{ width: "100%", height: "300px" }}
              ></model-viewer>
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
              <Text weight={700} size={30} color={"white"}>
                Engineering
              </Text>
            </Group>

            <Link to="/engineering">
              <Group position="center">
                <Text className="px-16 py-2 bg-blue-800 text-white rounded-sm font-semibold">
                  Explore
                </Text>
              </Group>
            </Link>
          </Card>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            className="bg-gradient-to-r from-sky-400 to-blue-500"
          >
            <Card.Section>
              <model-viewer
                id="arch_model"
                src={Building}
                disable-zoom
                ar
                ar-modes="webxr scene-viewer quick-look"
                seamless-poster
                shadow-intensity="1"
                camera-controls
                style={{ width: "100%", height: "300px" }}
              ></model-viewer>
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
              <Text weight={700} size={30} color={"white"}>
                Architecture
              </Text>
            </Group>

            <Link to="/">
              <Group position="center">
                <Text className="px-16 py-2 bg-blue-800 text-white rounded-sm font-semibold">
                  Explore
                </Text>
              </Group>
            </Link>
          </Card>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            className="bg-gradient-to-r from-sky-400 to-blue-500"
          >
            <Card.Section>
              <model-viewer
                id="arch_model"
                src={Tourism}
                disable-zoom
                ar
                ar-modes="webxr scene-viewer quick-look"
                seamless-poster
                shadow-intensity="1"
                camera-controls
                style={{ width: "100%", height: "300px" }}
              ></model-viewer>
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
              <Text weight={700} size={30} color={"white"}>
                Tourism
              </Text>
            </Group>

            <Link to="/">
              <Group position="center">
                <Text className="px-16 py-2 bg-blue-800 text-white rounded-sm font-semibold">
                  Explore
                </Text>
              </Group>
            </Link>
          </Card>
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            className="bg-gradient-to-r from-sky-400 to-blue-500"
          >
            <Card.Section>
              <model-viewer
                id="arch_model"
                src={Entertainment}
                disable-zoom
                ar
                ar-modes="webxr scene-viewer quick-look"
                seamless-poster
                shadow-intensity="1"
                camera-controls
                style={{ width: "100%", height: "300px" }}
              ></model-viewer>
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
              <Text weight={700} size={30} color={"white"}>
                Entertainment
              </Text>
            </Group>

            <Link to="/">
              <Group position="center">
                <Text className="px-16 py-2 bg-blue-800 text-white rounded-sm font-semibold">
                  Explore
                </Text>
              </Group>
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}

export default CardBox;
