import React from "react";
import { Img, Switch, Text, Button } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="mx-auto flex w-full max-w-[1497px] items-start gap-5 md:flex-col">
        <div className="flex flex-1 items-start justify-between gap-5 md:self-stretch sm:flex-col">
          <div className="flex w-[25%] items-center justify-between gap-5 rounded-[31px] border border-solid border-green-100 bg-gray-800_02 p-2.5 sm:w-full">
            <Button color="green_100" size="xs" className="min-w-[108px] rounded-[21px] font-medium sm:px-5">
              Model 1
            </Button>
            <ul className="mr-[30px] flex flex-wrap gap-[70px] md:mr-0 md:gap-5">
              <li>
                <a href="#">
                  <Text size="s" as="p">
                    Model 1
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="s" as="p">
                    Model 1
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <Switch className="mt-[19px]" />
        </div>
        <div className="mt-[9px] flex w-[3%] flex-col items-end md:w-full">
          <div className="relative z-[1] h-[12px] w-[12px] rounded-md bg-yellow-800" />
          <Img
            src="images/img_ellipse_137.png"
            alt="circleimage"
            className="relative mt-[-11px] h-[42px] w-[42px] rounded-[50%]"
          />
        </div>
      </div>
    </header>
  );
}
