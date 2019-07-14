import React from "react";
import styled from "styled-components";
import {
  RenderedContent,
  GroupRendererComponent,
} from "@kyma-project/documentation-component";
import { StickyContainer, Sticky } from "react-sticky";
import { customScrollBar, headingPrefix } from "../helpers";
import { Tabs, Tab, HeadersNavigation } from "../components";

export const GroupRenderer: React.FunctionComponent<GroupRendererComponent> = ({
  sources,
}) => {
  if (!sources || !sources.length) {
    return null;
  }

  return (
    <Tabs>
      <Tab label="Documentation">
        <StickyContainer>
          <div>
            <RenderedContent sourceTypes={["md", "markdown"]} />
          </div>
          <Sticky>
            {({ style }: any) => (
              <div style={{ ...style, zIndex: 200, width: "310px" }}>
                <HeadersNavigation />
              </div>
            )}
          </Sticky>
        </StickyContainer>
      </Tab>
      <Tab label="Events">
        <RenderedContent sourceTypes={["asyncapi", "async-api", "events"]} />
      </Tab>
      <Tab label="Console">
        <RenderedContent sourceTypes={["openapi", "open-api", "swagger"]} />
      </Tab>
    </Tabs>
  );
};
