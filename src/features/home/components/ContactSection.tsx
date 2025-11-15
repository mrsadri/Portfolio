import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import TelegramIcon from "@mui/icons-material/Telegram";
import LetsTalkSection from "@shared/components/LetsTalkSection";
import type { ContactAction } from "@shared/components/LetsTalkSection";

const ContactSection = () => {
  const secondaryActions: ContactAction[] = [
    {
      label: "Email",
      href: "mailto:sadrimasih@gmail.com",
      icon: <EmailRoundedIcon />,
    },
    {
      label: "Book a session",
      href: "/contact#mentorship",
      icon: <EventAvailableIcon />,
    },
  ];

  return (
    <LetsTalkSection
      id="contact"
      primaryAction={{
        label: "Direct message",
        href: "https://t.me/masihsadri",
        icon: <TelegramIcon />,
      }}
      secondaryActions={secondaryActions}
    />
  );
};

export default ContactSection;
