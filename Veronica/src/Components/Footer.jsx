import "./Footer.css"

export default function Footer() {
  const offices = [
    { id: 1, city: "Lahore, Pakistan", address: "E-153-F3, Ghazni Lane, Street No. 3, Super Town, Lahore Cantt, Lahore" },
    { id: 2, city: "Islamabad, Pakistan", address: "FF-14, Zarpar Arcade, D-12 Markaz D 12 Markaz D-12, Islamabad" },
    { id: 3, city: "Riyadh, Saudi Arabia", address: "Building No. 2162, Al-Sahaba Street, Postal Code 13253, Al-Munsiyah District" }
  ];

  return (
    <footer className="FooterContainer">
      <div className="footerheader">
        <h4>Email Us: info@veronicatechexpo.com</h4>
      </div>
      
      <div className="footerContent">
        <div className="cardContainer">
          {offices.map((office) => (
            <div key={office.id} className={`card card${office.id}`}>
              <h5>{office.city}</h5>
              <p>{office.address}</p>
            </div>
          ))}
        </div>
        <h5 className="termsText">Terms & Conditions</h5>
      </div>

      <div className="footerEnd">
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}
