import React from "react";
import { Text, Img } from "./..";

export default function AIVACHatbotUIRowtelevision({ researchtext = "Reasearch about ui ux", rectangleOne, ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_television.svg" alt="television" className="h-[19px] w-[24px]" />
      <Text as="p" className="ml-4">
        {researchtext}
      </Text>
      {!!rectangleOne ? <div className="ml-[63px] mt-[437px] w-[15%] rounded-[14px]" /> : null}
    </div>
  );
}
