import "./style.css";

const Langganan = () => {
  return (
    <div className="contentemail">
      <div className="gambar">
        <div class="judul1 ">
          <h3>Dapatkan E-Book Travel Gratis dengan Berlangganan</h3>
        </div>
        <div className="row">
          <div className="col-lg-9 col-sm-12 form-element ">
            <input placeholder="Enter your email address ..." type="email" class="text-center form-control" name="email_subscribe" id="email_subscribe" autocomplete="off" data-country="id"></input>
          </div>
          <div className="col-lg-2 col-sm-12 mt-1">
            <button class="btn w-100 btn-block btn-primary" type="button" placeholder="Berlanganan">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Langganan;
