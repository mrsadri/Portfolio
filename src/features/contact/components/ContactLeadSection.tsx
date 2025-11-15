import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import LetsTalkSection from "@shared/components/LetsTalkSection";
import type { ContactAction } from "@shared/components/LetsTalkSection";

const secondaryActions: ContactAction[] = [
  {
    label: "Direct Message",
    href: "https://t.me/masihsadri",
    icon: <TelegramIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/msadri/",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/mrsadri",
    icon: <GitHubIcon />,
  },
  {
    label: "Set an appointment",
    href: "#mentorship",
    icon: <EventAvailableIcon />,
  },
];

const ContactLeadSection = () => (
  <LetsTalkSection
    id="connect"
    primaryAction={{
      label: "sadrimasih@gmail.com",
      href: "mailto:sadrimasih@gmail.com",
      icon: <EmailRoundedIcon />,
    }}
    secondaryActions={secondaryActions}
  />
);

export default ContactLeadSection;

