import ModalForm, { FormState } from "@/components/elements/Modal";
import { useModalStore } from "@/components/elements/Modal/useModalStore";
import NavHeader, { NavHeaderProps } from "@/components/elements/NavHeader";
import { useState } from "react";

export default function HeaderView() {
  const list: NavHeaderProps[] = [
    {
      title: "Indo Heroes",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { submittedData, setSubmittedData } = useModalStore();

  return (
    <div className="w3-top">
      <div className="w3-bar w3-black w3-card">
        {list.map((item, index) => (
          <NavHeader key={index} {...item} />
        ))}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Mencegah navigasi default
            setIsModalOpen(true);
          }}
          className="w3-padding-large w3-hover-red w3-hide-small w3-right"
        >
          <i className="fa fa-search"></i>
        </a>
      </div>
      <ModalForm initialData={submittedData} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={(data: FormState) => {
          console.log(data);
          setSubmittedData(data);
      }} />
    </div>
  );
}
