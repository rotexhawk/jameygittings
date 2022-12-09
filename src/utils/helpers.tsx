import React from "react";
import { Heading } from "react-bulma-components";

export type Block = {
  id: string;
  innerHtml: string;
  tagName: string;
  type: string;
  attributes:
    | {
        name: string;
        value: string;
      }[]
    | [];
};

export const singleBlockGetter = (blocks: Block[]) => (name: string) => {
  return blocks.filter(({ attributes }) =>
    attributes[0]?.value.includes(name)
  )[0];
};

export const blockTextGetter =
  (blocks: Block[]) => (beginningBlock: string, endingBlock?: string) => {
    const blockSplice: Block[] = [];
    let firstBlockFound = false;
    for (const block of blocks) {
      const { name, value } = block.attributes[0] ?? {};
      if (
        !firstBlockFound &&
        name === "className" &&
        value?.includes(beginningBlock)
      ) {
        firstBlockFound = true;
        blockSplice.push(block);
      } else if (firstBlockFound) {
        if (endingBlock && value?.includes(endingBlock)) {
          break;
        }

        blockSplice.push(block);
      }
    }
    return blockSplice;
  };

export const toBlockHtml = (blocks: Block[]) => {
  return blocks.map(block => {
    const classNames = block.attributes
      .filter(({ name }) => name === "className")
      .map(({ value }) => value)
      .join(" ");

    switch (block.tagName) {
      case "p":
        return (
          <p
            className={classNames ? classNames : ""}
            key={block.id}
            dangerouslySetInnerHTML={{ __html: block.innerHtml }}
          />
        );
      case "h2":
        return (
          <Heading
            key={block.id}
            size={3}
            textSize={2}
            className={classNames ? classNames : ""}
          >
            {block.innerHtml}
          </Heading>
        );
    }
  });
};
