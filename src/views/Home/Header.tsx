import NavHeader from "@/components/elements/NavHeader";

export default function HeaderView() {

    const list = [
        "Indo Heroes",
        "About"
    ]

  return (
    <div className="w3-top">
      <div className="w3-bar w3-black w3-card">
        {
            list.map((item, index) => (
                <NavHeader key={index} title={item} url="" />
            ))
        }
        <a
          href="#"
          className="w3-padding-large w3-hover-red w3-hide-small w3-right"
        >
          <i className="fa fa-search"></i>
        </a>
      </div>
    </div>
  );
}
