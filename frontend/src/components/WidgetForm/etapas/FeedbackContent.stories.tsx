import { Popover } from "@headlessui/react";
import { Meta, StoryObj } from "@storybook/react";
import { feedbackTypes } from "..";
import FeedbackContent, { FeedbackContentProps } from "./FeedbackContent";
import { rest } from "msw";


export default {
  title: "Widget UI/FeedbackContent",
  component: FeedbackContent,
  args: {
    feedbackType: "bug",
  },
  argTypes: {
    feedbackType: {
      options: Object.keys(feedbackTypes),
      control: "inline-radio"
    }
  },
  parameters: {
    msw: {
      handlers: [
        rest.post("/feedbacks", (req, res) => {
          return res();
        })
      ]
    }
  },
  decorators: [
    (Story) => {
      return (
        <Popover>
          <Popover.Panel static className="flex justify-center">
            <div className="bg-zinc-900 p-4 rounded-lg w-96">{Story()}</div>
          </Popover.Panel>
        </Popover>
      );
    },
  ],
} as Meta<FeedbackContentProps>;

export const Bug: StoryObj<FeedbackContentProps> = {
  args: {
    feedbackType: "bug",
  },
};

export const Idea: StoryObj<FeedbackContentProps> = {
  args: {
    feedbackType: "idea",
  },
};

export const Other: StoryObj<FeedbackContentProps> = {
  args: {
    feedbackType: "other",
  },
};
