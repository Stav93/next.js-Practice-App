import LayoutStracture from "../../../components/layout-structure";

export const metadata = { title: "playlist personality quiz - david kando" };

export default function Layout({ children }) {
  return (
    <LayoutStracture
      background="bg-gradient-to-b from-slate-100 to-purple-50"
      title="playlist personality quiz"
    >
      {children}
    </LayoutStracture>
  );
}
