import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import type { ReactNode } from "react";
import LetsTalkSection from "../../../shared/components/LetsTalkSection";
import type { ContactAction } from "../../../shared/components/LetsTalkSection";
import type { SocialLink } from "../types";

type ContactSectionProps = {
  socialLinks: ReadonlyArray<SocialLink>;
};

const ICON_MAP: Record<string, ReactNode> = {
  LinkedIn: <LinkedInIcon />,
  GitHub: <GitHubIcon />,
};

const ContactSection = ({ socialLinks }: ContactSectionProps) => {
  const baseActions: ContactAction[] = socialLinks.map((link) => ({
    label: link.label,
    href: link.href,
    icon: ICON_MAP[link.label] ?? undefined,
  }));

  const secondaryActions: ContactAction[] = [
    ...baseActions,
    {
      label: "Direct message",
      href: "https://t.me/masihsadri",
    },
    {
      label: "Book a session",
      href: "/contact#mentorship",
    },
  ];

  return (
    <LetsTalkSection
      id="contact"
      primaryAction={{
        label: "sadrimasih@gmail.com",
        href: "mailto:sadrimasih@gmail.com",
        icon: <EmailRoundedIcon />,
      }}
      secondaryActions={secondaryActions}
    />
  );
};

export default ContactSection;
