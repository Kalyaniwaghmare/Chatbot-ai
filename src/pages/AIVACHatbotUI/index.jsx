import React from "react";
import { Helmet } from 'react-helmet';
import { Img, Text, Input, Button, Heading } from "../../components";
import Header from "../../components/Header";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function AIVACHatbotUIPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Explore Chatbot Features - AI Advantages & Automation</title>
        <meta name="description" content="Discover the cutting-edge features of our AI chatbot. Learn how automation and AI can enhance efficiency, decision-making, and accuracy in your daily operations." />
      </Helmet> 

      <div className="w-full bg-orange-50_01">
        <div className="flex items-start md:flex-col">

          {/* chatbot sidebar section */}
          <Sidebar width="332px !important" collapsedWidth="80px !important" collapsed={collapsed} className="!sticky top-0 flex h-screen flex-col overflow-auto bg-gray-800_02 py-10 md:hidden md:p-5">

            {/* chatbot title section */}
            <Heading size="md" as="h4" className="ml-[49px] mt-[5px] !text-white-A700 md:ml-0">
              <span className="text-white-A700">AIVA&nbsp;</span>
              <span className="font-normal text-white-A700">CHATBOT</span>
            </Heading>
            <Img src="images/img_separator.svg" alt="separator_one" className="mt-[33px] h-px w-full" />

            {/* new chat section */}
            <div className="ml-6 mt-10 flex w-[80%] items-center gap-[7px] rounded-[30px] bg-gray-800_01 p-[17px] md:ml-0 md:w-full">
              <Img src="images/img_ic_round_add.svg" alt="icroundadd_one" className="ml-[7px] h-[24px] w-[24px]" />
              <Text as="p">New Chat</Text>
            </div>
            <Text size="s" as="p" className="ml-6 mt-9 !font-normal uppercase !text-gray-500_01 md:ml-0">Yesterday</Text>

            {/* sidebar menu section */}
            <Menu menuItemStyles={{ button: { "padding":0,"color":"#ffffff","fontWeight":400,"fontSize":"15px","paddingTop":"9px","paddingLeft":"9px","gap":"16px" } }} className="mt-2.5 w-full self-stretch">

              {/* menu items yesterday section */}
              <div className="flex flex-col gap-[0.54px]">
                <MenuItem icon={<Img src="images/img_television.svg" alt="television_one" className="h-[19px] w-[24px]" />} suffix={<div className="w-[14%] rounded-[14px]" />}>
                  Platform Marketplace 101
                </MenuItem>
                <MenuItem icon={<Img src="images/img_television.svg" alt="television" className="h-[19px] w-[24px]" />}>
                  Give me a proposal for company name
                </MenuItem>
                <MenuItem icon={<Img src="images/img_television.svg" alt="television_five" className="h-[19px] w-[24px]" />}>
                  Can you write a short paragraph for
                </MenuItem>
                <MenuItem icon={<Img src="images/img_television.svg" alt="television" className="h-[19px] w-[24px]" />} suffix={<div className="w-[15%] rounded-[14px]" />}>
                  Reasearch about ui ux
                </MenuItem>
              </div>

              {/* menu items last week section */}
              <div className="flex flex-col items-start">
                <Text size="s" as="p" className="ml-6 mt-[13px] !font-normal uppercase !text-gray-500_01 md:ml-0">Last week</Text>
                <MenuItem icon={<Img src="images/img_television.svg" alt="television_nine" className="h-[19px] w-[24px]" />} suffix={<div className="w-[14%] rounded-[14px]" />}>
                  Platform Marketplace 101
                </MenuItem>
                <MenuItem icon={<Img src="images/img_television.svg" alt="television" className="h-[19px] w-[24px]" />}>
                  Give me a proposal for company name
                </MenuItem>
              </div>

              {/* menu items last month section */}
              <div className="flex flex-col items-start">
                <Text size="s" as="p" className="ml-6 mt-[22px] !font-normal uppercase !text-gray-500_01 md:ml-0">Last Month</Text>
                <MenuItem icon={<Img src="images/img_television.svg" alt="television" className="h-[19px] w-[24px]" />} suffix={<div className="w-[14%] rounded-[14px]" />}>
                  Platform Marketplace 101
                </MenuItem>
                <MenuItem icon={<Img src="images/img_television.svg" alt="television" className="h-[19px] w-[24px]" />}>
                  Give me a proposal for company name
                </MenuItem>
              </div>
            </Menu>

            {!collapsed ? 
              (
                // Upgrade button section
                <Button 
                  color="orange_50" 
                  shape="round" 
                  leftIcon={<Img src="images/img_close.svg" alt="close" className="h-[16px] w-[15px]" />}
                  className="ml-6 mt-[330px] min-w-[244px] gap-2.5 font-plusjakartasans font-semibold md:ml-0 sm:px-5"
                >
                  Upgrade to Plus
                </Button>
              ) 
              : null
            }
          </Sidebar>

          {/* main content section */}
          <div className="flex flex-1 flex-col items-center gap-[18px] md:self-stretch md:p-5">
            {/* header section */}
            <Header className="flex items-center self-stretch bg-gray-800 p-[29px] sm:p-5" />
            <div className="flex w-[95%] items-center gap-10 md:w-full md:flex-col">

              {/* question response section */}
              <div className="mb-2.5 flex flex-1 flex-col items-end gap-10 md:self-stretch">
                <div className="flex w-[94%] items-center gap-5 md:w-full md:flex-col">
                  <Input size="sm" name="questioncard" placeholder={`The advantages of Artificial Intelligence`} suffix={<Img src="images/img_edit.svg" alt="edit" className="h-[24px] w-[24px]" />} className="gap-[35px] rounded-[14px] border-light_green-200 !text-blue_gray-900 sm:px-5" />
                  <Img src="images/img_ellipse_137.png" alt="circleimage_one" className="h-[42px] w-[42px] rounded-[50%]" />
                </div>
                <div className="flex w-[94%] items-start gap-5 self-start md:w-full md:flex-col">
                  <Heading size="s" as="h1" className="mt-2.5 flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-green-100 text-center !text-gray-800">
                    A
                  </Heading>
                  <div className="flex flex-1 flex-col items-end justify-center gap-[21px] rounded-[14px] bg-orange-50 p-[19px] md:self-stretch">
                    <Text size="md" as="p" className="mr-0.5 mt-0.5 !font-plusjakartasans leading-6 !text-indigo-900 md:mr-0">
                      <>Artificial Intelligence (AI) offers numerous advantages and has the potential to revolutionize various aspects of our lives. Here are some key advantages of AI:<br /><br />Automation: AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency. This automation leads to increased productivity and efficiency in various industries.<br /><br />Decision-making: AI systems can analyze vast amounts of data, identify patterns, and make informed decisions based on that analysis. This ability is particularly useful in complex scenarios where humans may struggle to process large datasets or where quick and accurate decisions are crucial.<br /><br />Improved accuracy: AI algorithms can achieve high levels of accuracy and precision in tasks such as image recognition, natural language processing, and data analysis. They can eliminate human errors caused by fatigue, distractions, or bias, leading to more reliable and consistent results.<br /><br />Continuous operation: AI systems can work tirelessly without the need for breaks, resulting in uninterrupted 24/7 operations. This capability is especially beneficial in applications like customer support chatbots, manufacturing processes, and surveillance systems.</>
                    </Text>
                    <div className="mr-0.5 flex gap-5 md:mr-0">
                      <Img src="images/img_offer.svg" alt="offer_one" className="h-[19px]" />
                      <Img src="images/img_television_gray_500.svg" alt="television" className="h-[19px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[94%] flex-col items-center md:w-full">
                  <div className="flex w-[69%] gap-5 self-start md:w-full md:flex-col">
                    <Button shape="round" className="w-full flex-1 font-plusjakartasans font-semibold md:self-stretch sm:px-5">
                      Make Response Shorter
                    </Button>
                    <Button shape="round" className="w-full flex-1 font-plusjakartasans font-semibold md:self-stretch sm:px-5">
                      Explain it to me like a lawyer
                    </Button>
                    <Button shape="round" className="min-w-[187px] font-plusjakartasans font-semibold sm:px-5">
                      Tell me about more
                    </Button>
                  </div>
                  <Button color="orange_50" shape="round" leftIcon={<Img src="images/img_qrcode.svg" alt="qrcode" className="h-[14px] w-[14px]" />} className="mt-[120px] min-w-[218px] gap-2.5 border border-solid border-gray-800_02 font-plusjakartasans font-semibold sm:px-5">
                    Regenerate response
                  </Button>
                  <div className="mt-[30px] flex self-stretch md:flex-col">
                    <Input shape="round" name="input_one" placeholder={`The advantages of Artificial Intelligence`} className="border-red-200 sm:pr-5" />
                    <div className="relative ml-[-12px] flex w-[7%] justify-center rounded-br-[10px] rounded-tr-[10px] bg-gray-800_02 p-4 md:ml-0 md:w-full">
                      <Img src="images/img_save.svg" alt="save_one" className="h-[19px] w-[19px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* links section */}
              <div className="flex w-[28%] flex-col gap-[30px] rounded-[10px] bg-green-50 p-[30px] md:w-full sm:p-5">
                <Text size="xl" as="p" className="!text-gray-800">
                  <span className="text-gray-800">Links to&nbsp;</span>
                  <span className="font-semibold text-gray-800">Document</span>
                  <span className="text-gray-800">&nbsp;and&nbsp;</span>
                  <span className="font-semibold text-gray-800">Website for this Response</span>
                </Text>
                <div className="mb-[719px] flex flex-col gap-2.5">
                  <div className="flex flex-col gap-[9px]">
                    <div className="flex items-center justify-between gap-5">
                      <Text size="xs" as="p" className="!text-gray-800 underline">Link to website</Text>
                      <Img src="images/img_arrow_up.svg" alt="arrowup_one" className="h-[14px] w-[14px] self-start" />
                    </div>
                    <div className="h-px bg-green-100_01" />
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <Text size="xs" as="p" className="!text-gray-800 underline">Link to document file</Text>
                    <Img src="images/img_arrow_up.svg" alt="arrowup_three" className="h-[14px] w-[14px] self-start" />
                  </div>
                  <div className="h-px bg-green-100_01" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
