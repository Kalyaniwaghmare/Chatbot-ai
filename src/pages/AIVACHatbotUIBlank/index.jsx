import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Input, Heading, Button } from "../../components";
import Header from "../../components/Header";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const data = [
  { comeupwith: "Come up with concepts", foraretro: "for a retro style arcade game" },
  { comeupwith: "Explain why popcorn pops", foraretro: "to a kid who loves to watch in the microvawe" },
  { comeupwith: "Plan a trip", foraretro: "to see the nothern lights in norway" },
  { comeupwith: "Give me ideas", foraretro: "for what to do with my kid’s art" },
  { comeupwith: "Come up with concepts", foraretro: "for a retro style arcade game" },
  { comeupwith: "Explain why popcorn pops", foraretro: "to a kid who loves to watch in the microvawe" },
];

export default function AIVACHatbotUIBlankPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Creative Chatbot Ideas - Fun & Education</title>
        <meta
          name="description"
          content="Spark your creativity with our chatbot. Get unique ideas for retro arcade games, educational activities for kids, and planning memorable experiences like the Northern Lights trip."
        />
      </Helmet>

      {/* main layout section */}
      <div className="w-full bg-orange-50_01">
        {/* sidebar section */}
        <div className="flex items-start md:flex-col">
          {/* sidebar content section */}
          <Sidebar
            width="332px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            className="!sticky top-0 flex h-screen flex-col overflow-auto bg-gray-800_02 py-10 md:hidden md:p-5 sm:py-5"
          >
            <Heading size="md" as="h4" className="ml-[49px] mt-[5px] !text-white-A700 md:ml-0">
              <span className="text-white-A700">AIVA&nbsp;</span>
              <span className="font-normal text-white-A700">CHATBOT</span>
            </Heading>
            <Img src="images/img_separator.svg" alt="separator_one" className="mt-[33px] h-px w-full" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: " ",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "15px",
                  borderRadius: "30px",
                  margin: " ",
                  [`&:hover, &.ps-active`]: { backgroundColor: "#38462c !important" },
                },
              }}
              className="mt-10 w-full pl-6 sm:pl-5"
            >
              <MenuItem
                icon={<Img src="images/img_ic_round_add.svg" alt="icroundadd_one" className="h-[24px] w-[24px]" />}
              >
                New Chat
              </MenuItem>
            </Menu>
            {!collapsed ? (
              <Button
                color="orange_50"
                shape="round"
                leftIcon={<Img src="images/img_close.svg" alt="close" className="h-[16px] w-[15px]" />}
                className="ml-6 mt-[844px] min-w-[244px] gap-2.5 font-plusjakartasans font-semibold md:ml-0 sm:px-5"
              >
                Upgrade to Plus
              </Button>
            ) : null}
          </Sidebar>
          <div className="flex flex-1 flex-col items-center gap-10 md:self-stretch md:p-5">
            {/* header section */}
            <Header className="flex items-center self-stretch bg-gray-800 p-[29px] sm:p-5" />

            {/* main content section */}
            <div className="flex w-[91%] items-center gap-[39px] md:w-full md:flex-col">
              {/* chatbot image section */}
              <div className="mb-2.5 flex flex-1 flex-col items-center self-end md:self-stretch">
                <Img src="images/img_aiva_chatbot.svg" alt="aivachatbot_two" className="h-[217px] w-[48%]" />

                {/* ideas grid section */}
                <div className="mt-[255px] grid grid-cols-3 justify-center gap-[29px] self-stretch md:grid-cols-2 sm:grid-cols-1">
                  {data.map((d, index) => (
                    <div
                      key={"gridcomeupwith" + index}
                      className="flex w-full flex-col items-start justify-center gap-[3px] rounded-[10px] border border-solid border-lime-700 p-3.5"
                    >
                      <Heading as="h1" className="ml-[5px] mt-0.5 md:ml-0">
                        {d.comeupwith}
                      </Heading>
                      <Text size="xs" as="p" className="ml-[5px] !font-plusjakartasans !text-gray-600 md:ml-0">
                        {d.foraretro}
                      </Text>
                    </div>
                  ))}
                </div>

                {/* message input section */}
                <div className="mt-10 flex self-stretch md:flex-col">
                  <Input
                    shape="round"
                    name="message"
                    placeholder={`Send a message...`}
                    className="border-red-200 !text-lime-700_01 sm:pr-5"
                  />
                  <div className="relative ml-[-12px] flex w-[7%] justify-center rounded-br-[10px] rounded-tr-[10px] bg-gray-800_02 p-4 md:ml-0 md:w-full">
                    <Img src="images/img_save.svg" alt="save_one" className="h-[19px] w-[19px]" />
                  </div>
                </div>
              </div>

              {/* generated links section */}
              <div className="w-[29%] rounded-[10px] bg-green-50 p-[30px] md:w-full sm:p-5">
                <Text size="xl" as="p" className="my-[390px] !text-green-400">
                  <span className="text-green-400">Generated Links of&nbsp;</span>
                  <span className="font-semibold text-green-400">Websites</span>
                  <span className="text-green-400">&nbsp;and&nbsp;</span>
                  <span className="font-semibold text-green-400">Documents will appear here</span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
