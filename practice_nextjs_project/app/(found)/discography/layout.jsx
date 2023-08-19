import LayoutStracture from "../../../components/layout-structure";

export const metadata = { title: "Discography - david kando" };

export default function Layout({ children }) {
  return (
    <LayoutStracture
      background="bg-gradient-to-b from-blue-100 to-pink-50"
      title="Discography"
    >
      {children}
    </LayoutStracture>
  );
}
