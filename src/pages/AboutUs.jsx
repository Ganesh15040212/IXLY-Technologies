import Layout from '../components/Layout'

export default function AboutUs() {
  return (
    <Layout title="About Us - IXLY Technologies">
      <div className="bodybg bodybg1">
        <section className="container text-center banner_head">
          <h2>Come for the <b>Technology</b>, <br /> Stay for the <b>Culture</b></h2>
        </section>
        <section>
          <div className="about_company portfolio container">
            <div className="row col-md-12">
              <div className="col-md-6 zin zoomout">
                <h3 className="highlighttext">IXLY Technologies</h3>
                <h2>Who We Are</h2>
                <p>IXLY Technologies is a quality online marketing and application development company having our base in Coimbatore, Tamil Nadu, India. Our company is always a pioneer in adapting technologies and providing innovative solutions. Our company core activities include Website Design and Development, Software Design and Development, Mobile Application Design and Development, Search Engine Optimization, Responsive Web Design, and Web Hosting Service. We have satisfied customers all over the work across industries. Our motive is always to focus on client satisfaction. Our deep domain expertise provides our clients top-notch service timely manner.</p>
              </div>
              <div className="col-md-6 zin posrel text-end">
                <img className="img4" src="/assets/img/about-company-banner.png" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
        <section className="design_col">
          <div className="container">
            <div className="row col-md-12">
              <div className="col-md-6">
                <h3 className="highlighttext">Our Strategy</h3>
                <p>Our Strategy services provide customized digital solutions to your business which can help you turn into a industry leader. Our Strategy Provide a roadmap to online success. We provide competitive business analysis by considering digital and business trends and suggest digital strategies. We build new brands and give existing brand a refreshing, strategic approach to set up your brand story.</p>
              </div>
              <div className="col-md-6">
                <h3 className="highlighttext">Our Design</h3>
                <p>Our Expert team brings digital ideas to life with beautifully executed, creative design. Every business is unique and our wide design solutions take your business to next level. Key calls-to-action and stickiness factor keep your site's visitor coming back.</p>
              </div>
              <div className="col-md-6">
                <h3 className="highlighttext">Our Development</h3>
                <p>Our Expert development team work on cutting edge technologies and best practices. Our methodology is proven for each industry we serve. We provide team of specialized experts. All the website that we build is made to perform.</p>
              </div>
              <div className="col-md-6">
                <h3 className="highlighttext">Our Maintenance</h3>
                <p>Our relationship with the client never ends after website built. We provide life time bug fixing and small work that are less than one hour. Best hosting services.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="prepare_bg">
          <div className="container">
            <div className="row col-md-12">
              <div className="col-md-9 zin">
                <h3>Preparing For Your Business.<br />Success With IT Solution</h3>
              </div>
              <div className="col-md-3 zin">
                <a href="#">Meet With Us</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
