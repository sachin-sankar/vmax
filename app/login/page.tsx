"use client";

import {
  Flex,
  Stack,
  Title,
  Button,
  Tabs,
  Input,
  PasswordInput,
  Group,
  TabsPanel,
} from "@mantine/core";
import React from "react";
import Logo from "../components/Logo";
import {
  IconBook,
  IconSchool,
  IconUserScreen,
  IconUserHeart,
  IconLogin,
} from "@tabler/icons-react";
import Construct from "../components/Construct";
const LoginPage = () => {
  return (
    <Flex className="h-screen gap-2">
      <div className="h-full w-3/12 bg-black">
        <img
          src="/VITBanner.jpg"
          className="object-cover object-bottom h-full"
          alt=""
        />
      </div>
      <Stack className="flex-grow" justify="left">
        <div className="p-4">
          <Logo></Logo>
        </div>
        <div className="p-4 pt-0 flex flex-col gap-1">
          <span className="text-6xl font-bold">Welcome</span>
          <span className="text-md">Log in to VMAX to continue.</span>
        </div>
        <Tabs variant="outline" defaultValue={"student"}>
          <Tabs.List grow>
            <Tabs.Tab value="student" leftSection={<IconBook />}>
              Student
            </Tabs.Tab>
            <Tabs.Tab value="faculty" leftSection={<IconUserScreen />}>
              Faculty
            </Tabs.Tab>
            <Tabs.Tab value="parent" leftSection={<IconUserHeart />}>
              Parent
            </Tabs.Tab>
            <Tabs.Tab value="alumni" leftSection={<IconSchool />}>
              Alumni
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="student">
            <Stack className="p-5">
              <Title order={2}>Login as Student</Title>
              <Input.Wrapper
                className="w-5/12"
                label="Username"
                description="Your username set by you"
                error=""
                size="lg"
              >
                <Input placeholder="" variant="filled" size="lg" />
              </Input.Wrapper>
              <PasswordInput
                className="w-5/12"
                variant="filled"
                size="lg"
                label="Password"
                description="Enter your VMAX password."
                placeholder=""
              />
              <div className="w-5/12">
                <Button size="lg" fullWidth rightSection={<IconLogin />}>
                  Login
                </Button>
              </div>
            </Stack>
          </Tabs.Panel>
          <Tabs.Panel value="faculty">
            <Construct />
          </Tabs.Panel>
          <Tabs.Panel value="parent">
            <Construct />
          </Tabs.Panel>
          <Tabs.Panel value="alumni">
            <Construct />
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
