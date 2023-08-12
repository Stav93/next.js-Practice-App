import LayoutStracture from "../../components/layout-structure";

export const metadata = { title: "connect with david kando" };

export default function Layout({ children }) {
  return (
    <LayoutStracture
      background="bg-gradient-to-b from-slate-100 to-pink-100"
      title="Let's hang around"
    >
      {children}
    </LayoutStracture>
  );
}
