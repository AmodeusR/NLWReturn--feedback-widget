import { Popover } from "@headlessui/react";
import { Meta, StoryObj } from "@storybook/react";
import FeedbackTypeStep from "./FeedbackTypeStep";

export default {
  title: "Widget UI/FeedbackTypeStep",
  component: FeedbackTypeStep,
  decorators: [
    (Story) => {
      return (
      <Popover>
        <Popover.Panel static className="flex justify-center">
          <div className="bg-zinc-900 p-4 rounded-lg w-96">
          {Story()}
          </div>
        </Popover.Panel>
      </Popover>
      );
    }
  ]
} as Meta

export const Default: StoryObj = {}