// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aPZu6epBt5EaEYRgMF1d6z
// Component: Yh0Ros8irE
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ListItem from "../../ListItem"; // plasmic-import: UmnocbxlOe4RY/component
import YouTube from "react-youtube"; // plasmic-import: -IzJqW3d4U/codeComponent
import { GoogleMap } from "@react-google-maps/api"; // plasmic-import: JpRCwVFY78Q/codeComponent

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: AeNTI-zK4Ow6K/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_code_component_examples.module.css"; // plasmic-import: aPZu6epBt5EaEYRgMF1d6z/projectcss
import * as sty from "./PlasmicColumns.module.css"; // plasmic-import: Yh0Ros8irE/css

export type PlasmicColumns__VariantMembers = {
  centered: "centered";
};

export type PlasmicColumns__VariantsArgs = {
  centered?: SingleBooleanChoiceArg<"centered">;
};

type VariantPropType = keyof PlasmicColumns__VariantsArgs;
export const PlasmicColumns__VariantProps = new Array<VariantPropType>(
  "centered"
);

export type PlasmicColumns__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicColumns__ArgsType;
export const PlasmicColumns__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicColumns__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultColumnsProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  centered?: SingleBooleanChoiceArg<"centered">;
  className?: string;
}

function PlasmicColumns__RenderFunc(props: {
  variants: PlasmicColumns__VariantsArgs;
  args: PlasmicColumns__ArgsType;
  overrides: PlasmicColumns__OverridesType;
  dataFetches?: PlasmicColumns__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__centered]: hasVariant(variants, "centered", "centered")
      })}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <ListItem
            _package={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__sbAFr
                )}
              >
                {"react-youtube"}
              </div>
            }
            title={"Youtube"}
          >
            <YouTube
              className={classNames("__wab_instance", sty.youTube__sfNyD)}
              videoId={"R6MeLqRQzYw" as const}
            />
          </ListItem>
        ),

        value: args.children
      })}

      {p.renderPlasmicSlot({
        defaultContents: (
          <ListItem
            _package={"@react-google-maps/api"}
            className={classNames("__wab_instance", sty.listItem__n4IjD)}
            title={"Google Maps"}
          >
            <GoogleMap
              center={{ lat: -5, lng: -40 }}
              mapContainerClassName={classNames(
                "__wab_instance",
                sty.map__gaZzx
              )}
              zoom={6 as const}
            />
          </ListItem>
        ),

        value: args.slot
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicColumns__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicColumns__VariantsArgs;
    args?: PlasmicColumns__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicColumns__Fetches;
  } & Omit<PlasmicColumns__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicColumns__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicColumns__ArgProps,
      internalVariantPropNames: PlasmicColumns__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicColumns__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicColumns";
  } else {
    func.displayName = `PlasmicColumns.${nodeName}`;
  }
  return func;
}

export const PlasmicColumns = Object.assign(
  // Top-level PlasmicColumns renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicColumns
    internalVariantProps: PlasmicColumns__VariantProps,
    internalArgProps: PlasmicColumns__ArgProps
  }
);

export default PlasmicColumns;
/* prettier-ignore-end */
