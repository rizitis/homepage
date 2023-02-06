import { ArrowElbowDownRight } from "phosphor-react";

import { iconCount } from "@/lib/icons";
import OutboundLink from "@/components/OutboundLink";

import "./Links.css";

interface LinksProps {}

const Links = (_: LinksProps) => {
  return (
    <div className="links">
      <div>
        <ArrowElbowDownRight size={24} />
        <OutboundLink
          className="nav-link"
          href="https://phosphoricons.com/assets/phosphor-icons.zip"
          eventLabel="Download all"
          download
          type="application/zip"
        >
          Download all ({iconCount})
        </OutboundLink>
      </div>

      <div>
        <ArrowElbowDownRight size={24} />
        <span>
          <OutboundLink
            href="https://www.figma.com/community/file/903830135544202908/Phosphor-Icons"
            eventLabel="Figma library"
          >
            Figma library
          </OutboundLink>
          {" / "}
          <OutboundLink
            href="https://www.figma.com/community/plugin/898620911119764089/Phosphor-Icons"
            eventLabel="Figma plugin"
          >
            plugin
          </OutboundLink>
        </span>
      </div>

      <div>
        <ArrowElbowDownRight size={24} />
        <OutboundLink
          href="https://phosphoricons.com/assets/phosphor-icons.sketchplugin.zip"
          eventLabel="Download sketch plugin"
          download
          type="application/zip"
        >
          Sketch plugin
        </OutboundLink>
      </div>

      <div>
        <ArrowElbowDownRight size={24} />
        <span>
          <OutboundLink href="https://paypal.me/minoraxis" eventLabel="Donate">
            Donate on PayPal
          </OutboundLink>
          {" / "}
          <OutboundLink
            href="https://patreon.com/phosphoricons"
            eventLabel="Patreon"
          >
            Patreon
          </OutboundLink>
        </span>
      </div>

      <div>
        <ArrowElbowDownRight size={24} />
        <OutboundLink
          href="https://github.com/phosphor-icons/phosphor-home"
          eventLabel="GitHub"
        >
          GitHub
        </OutboundLink>
      </div>
      <div>
        <ArrowElbowDownRight size={24} />
        <OutboundLink
          href="https://github.com/phosphor-icons/phosphor-home/issues"
          eventLabel="Request"
        >
          Request an icon
        </OutboundLink>
      </div>
    </div>
  );
};

export default Links;
